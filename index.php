<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Memory</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="shortcut icon" href="logo.png">
</head>

<body>
    <div id="maincont">
        <h1 id="level">Level 1</h1>
        <h2 class="start" id="start">Start</h2>
        <main>
            <div class="divcont">
                <div class="buttons" id="green">
                    <p class="letters" id="greentext"></p>
                </div>
            </div>
            <div class="divcont">
                <div class="buttons" id="yellow">
                    <p class="letters" id="yellowtext"></p>
                </div>
            </div>
            <div class="divcont">
                <div class="buttons" id="blue">
                    <p class="letters" id="bluetext"></p>
                </div>
            </div>
            <div class="divcont">
                <div class="buttons" id="purple">
                    <p class="letters" id="purpletext"></p>
                </div>
            </div>
        </main>
    </div>
    <form id="subrank" action="ranking.php" method="POST">
        <input id="score" type="hidden" name="score" value="">
        <p id="finallog">Congratz! You won the right to replay !</p>
        <label id="userlabel" for="username">Enter a username:</label>
        <input id="username" type="text" name="username">
        <input type="submit" value="Submit Score">
    </form>
    <form id="replay" action="" method="POST">
        <p id="finallog">Congratz! You won the right to replay !</p>
        <input type="submit" value="Replay">
    </form>
    <footer>
        <?php 

        $source = file_get_contents("ranking.json");
        $data = json_decode($source);

        $a = 0;
$b = 0;
$c = 0;
$d = 0;
$e = 0;

foreach($data as $value) {
    if($value->score > $a) {
        $e = $d;
        $d = $c;
        $c = $b;
        $b = $a;
        $a = $value->score;
        if (isset($duser)){
            $euser = $duser;
        }
        if (isset($cuser)){
            $duser = $cuser;
        }
        if (isset($buser)){
            $cuser = $buser;
        }
        if (isset($auser)){
            $buser = $auser;
        }
        $auser = $value->username;
    } elseif($value->score > $b) {
        $e = $d;
        $d = $c;
        $c = $b;
        $b = $value->score;
        if (isset($duser)){
            $euser = $duser;
        }
        if (isset($cuser)){
            $duser = $cuser;
        }
        if (isset($buser)){
            $cuser = $buser;
        }
        $buser = $value->username;
    } elseif($value->score > $c) {
        $e = $d;
        $d = $c;
        $c = $value->score;
        if (isset($duser)){
            $euser = $duser;
        }
        if (isset($cuser)){
            $duser = $cuser;
        }
        $cuser = $value->username;
    } elseif($value->score > $d) {
        $e = $d;
        $d =  $value->score;
        if (isset($cuser)){
            $duser = $cuser;
        }
        $duser = $value->username;
    } elseif($value->score > $e) {
        $e =  $value->score;
        $euser = $value->username;        
    }
}
        
        ?>
        <h2 id="rankingcont">Ranking :</h2>
        <p>1. <span id="1stname"><?php echo $auser;?></span> - Lvl <span id="1stscore"><?php echo $a; ?></span></p>
        <p>2. <span id="2ndname"><?php echo $buser;?></span> - Lvl <span id="2ndscore"><?php echo $b; ?></span></p>
        <p>3. <span id="3rdname"><?php echo $cuser;?></span> - Lvl <span id="3rdscore"><?php echo $c; ?></span></p>
        <p>4. <span id="4thname"><?php echo $duser;?></span> - Lvl <span id="4thscore"><?php echo $d; ?></span></p>
        <p>5. <span id="5thname"><?php echo $euser;?></span> - Lvl <span id="5thscore"><?php echo $e; ?></span></p>
    </footer>

    <script src="script.js"></script>
</body>

</html>