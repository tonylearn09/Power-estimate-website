<?php
    header('Content-Type: application/json');
    $query = $_GET['query'];
    $value = array();


    if ($query == "all") {
        $gp = rand(1, 100);
        $gv = rand(1, 100);
        $gc = rand(1, 100);
        $sp = rand(1, 100);
        $sv = rand(1, 100);
        $sc = rand(1, 100);

        $value[] = array('GP' => $gp, 'GV' => $gv, 'GC' =>$gc, 'SP' =>$sp, 'SV' =>$sv, 'SC' =>$sc);
        echo json_encode($value);        
    }

?>
