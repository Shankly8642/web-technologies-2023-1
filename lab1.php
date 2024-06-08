<?php
$title = "Главная страница";
$h1 = "Текущий год: ";
$currentYear = date("Y");


function getCurrentTime() {

    $hours = date("H") + 3;
    $minutes = date("i");
    $hoursString = "";
    $minutesString = "";

    if ($hours == 1 || $hours == 21) {
        $hoursString = "час";
    } elseif (in_array($hours, [2, 3, 4, 22, 23])) {
        $hoursString = "часа";
    } else {
        $hoursString = "часов";
    }

    if ($minutes == 1 || $minutes == 21 || $minutes == 31 || $minutes == 41 || $minutes == 51) {
        $minutesString = "минута";
    } elseif (in_array($minutes, [2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54])) {
        $minutesString = "минуты";
    } else {
        $minutesString = "минут";
    }

    return "Текущее время: $hours $hoursString $minutes $minutesString";
}

$currentTime = getCurrentTime();
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
</head>
<body>
    <h1><?php echo $h1 . $currentYear; ?></h1>
    <content>
        <p><?php echo $currentTime; ?></p>
    </content>
</body>
</html>