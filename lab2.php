<?php
// Задание 1
$a = -8;
$b = -7;

if ($a >= 0 && $b >= 0) {
    echo "Разность = " . ($a - $b);

} else if ($a < 0 && $b < 0) {
    echo "Произведение = " . ($a * $b) ;

} else {
    echo "Сумма = " . ($a + $b);
}
echo "<br>";
echo "<br>";

// Задание 2
$a = 0;

switch ($a) {
    case 0:
        echo "0 <br>";
    case 1:
        echo "1 <br>";
    case 2:
        echo "2 <br>";
    case 3:
        echo "3 <br>";
    case 4:
        echo "4 <br>";
    case 5:
        echo "5 <br>";
    case 6:
        echo "6 <br>";
    case 7:
        echo "7 <br>";
    case 8:
        echo "8 <br>";
    case 9:
        echo "9 <br>";
    case 10:
        echo "10 <br>";
    case 11:
        echo "11 <br>";
    case 12:
        echo "12 <br>";
    case 13:
        echo "13 <br>";
    case 14:
        echo "14 <br>";
    case 15:
        echo "15 <br>";
}

echo "<br>";
echo "<br>";

// Задание 3

function sum($a, $b){
    return $a + $b;
}

function difference($a, $b){
    return $a - $b;
}

function composition($a, $b){
    return $a * $b;
}

function division($a, $b){
    if ($b == 0)
        return "Нельзя делить на 0";
    else 
        return $a / $b;
}

$a = 5;
$b = 9;

echo "Сумма = " . sum($a, $b) . "<br>";
echo "Разность = " . difference($a, $b) . "<br>";
echo "Произведение = " . composition($a, $b) . "<br>";
echo "Деление = " . division($a, $b) . "<br>";

echo "<br>";
echo "<br>";
// Задание 4

function mathOperation($arg1, $arg2, $operation){
    switch($operation){
        case 'Сумма':
            return sum($arg1, $arg2);
        case 'Разность':
            return difference($arg1, $arg2);
        case 'Произведение':
            return composition($arg1, $arg2);
        case 'Деление':
            return division($arg1, $arg2);
        default:
            return "Ошибка! Неверная операция";
    }
}

$a = 10;
$b = 11;

echo "Сумма = " . mathOperation($a, $b, "Сумма") . "<br>";
echo "Разность = " . mathOperation($a, $b, "Разность") . "<br>";
echo "Произведение = " . mathOperation($a, $b, "Произведение") . "<br>";
echo "Деление = " . mathOperation($a, $b, "Деление") . "<br>";
echo "Деление с остатком = " . mathOperation($a, $b, "Деление с остатком") . "<br>";

echo "<br>";
echo "<br>";

// Задание 5

$first_way = date('Y');
echo "Способ 1: <br>Текущий год: $first_way <br>";
echo "<br>";
$second_way = localtime(null, true)['tm_year'] + 1900;
echo "Способ 2: <br>Текущий год: $second_way <br>";
echo "<br>";
$third_way = getdate()['year'];
echo "Способ 3 <br>Текущий год: $third_way <br>";
echo "<br>";

echo "<br>";
echo "<br>";

// Задание 6

function power($val, $pow){
    if ($pow == 0)
        return 1;
    
    if ($pow == 1)
        return $val;

    return $val * power($val, $pow - 1);
}

$a = 3;
$b = 4;

echo "Результат возведения $a в степень $b: " . power($a, $b);
?>