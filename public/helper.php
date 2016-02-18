<?php
    header('Content-Type: application/json');
    $date = urldecode($_GET['datepicker']);
    $value = array();


    if ($date == "2015-05-10") {
        $draw_data[] = array(1582.3,0);
        $draw_data[] = array(28.95,1);
        $draw_data[] = array(1603,2);
        $draw_data[] = array(774,3);
        $draw_data[] = array(1245, 4);
        $draw_data[] = array(85,5);

        $value[] = array('label' => "RRrider and sorce data",'data' => $draw_data, 'color' => '#E8E800');
        echo json_encode($value);
        
    }
    else if ($date == "2015-05-20") {
        $draw_data[] = array(1698.3,0);
        $draw_data[] = array(44.95,1);
        $draw_data[] = array(1947,2);
        $draw_data[] = array(733,3);
        $draw_data[] = array(1000, 4);
        $draw_data[] = array(100,5);

        $value[] = array('label' => "RRrider and sorce data",'data' => $draw_data, 'color' => '#E8E800');
        echo json_encode($value);
    }
    else if ($date == "2015-05-30") {
        $draw_data[] = array(1783,0);
        $draw_data[] = array(11.22,1);
        $draw_data[] = array(639.2,2);
        $draw_data[] = array(289.4,3);
        $draw_data[] = array(1344, 4);
        $draw_data[] = array(893,5);

        $value[] = array('label' => "RRrider and sorce data",'data' => $draw_data, 'color' => '#E8E800');
        echo json_encode($value);
    } 
    else {
       $value[] = array('state' => 1, 'msg'=> 'no data'); 
       echo json_encode($value);
    }

?>
