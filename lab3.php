<?php
// Задание 1

function print_numbers(){
    $n = 0;

    do {
        if ($n == 0)
            echo "$n - это ноль.<br>";
        
        else if ($n % 2 == 0)
            echo "$n - чётное число.<br>";
            
        else 
            echo "$n - нечётное число.<br>";
        
        $n++;
    } while ($n <=10);
}

print_numbers();

echo "<br>";
echo "<br>";

// Задание 2

$regions = [
    "Московская область" => ["Москва", "Зеленоград", "Клин"],
    "Ленинградская область" => ["Санкт-Петербург", "Всеволожск", "Павловск", "Кронштадт"],
    "Рязанская область" => ["Рязань", "Касимов", "Скопин", "Рыбное", "Ряжск"]
];

foreach ($regions as $region => $cities) {
    echo "$region:<br>";
    echo implode(", ", $cities) . ".<br>";
    echo "<br>";
}

echo "<br>";
echo "<br>";

// Задание 3

$letters = [
    'а' => 'a',  'б' => 'b',  'в' => 'v',  'г' => 'g',  'д' => 'd',
    'е' => 'e',  'ё' => 'yo', 'ж' => 'zh', 'з' => 'z',  'и' => 'i',
    'й' => 'y',  'к' => 'k',  'л' => 'l',  'м' => 'm',  'н' => 'n',
    'о' => 'o',  'п' => 'p',  'р' => 'r',  'с' => 's',  'т' => 't',
    'у' => 'u',  'ф' => 'f',  'х' => 'kh', 'ц' => 'ts', 'ч' => 'ch',
    'ш' => 'sh', 'щ' => 'shch', 'ъ' => '',  'ы' => 'y',  'ь' => '',
    'э' => 'e',  'ю' => 'yu', 'я' => 'ya'
];

function transliteration($string, $array){
    $string = mb_strtolower($string, 'UTF-8');

    $transliteratedString = '';
    $length = mb_strlen($string, 'UTF-8');

    for ($i = 0; $i < $length; $i++){

        $char = mb_substr($string, $i, 1, 'UTF-8');

        if (array_key_exists($char, $array))
            $transliteratedString .= $array[$char];

        else 
            $transliteratedString .= $char;
        
    }

    return $transliteratedString;
}

$string = "привет, пошли гулять.";
echo $string . "<br>";
echo transliteration($string, $letters);

echo "<br>";
echo "<br>";

// Задание 4 и 5

$menu = [
    "Главная",
    "Каталог игр" => [
        "Шутеры" => [
            "Call of Duty: Black Ops 6",
            "Counter-Strike 2"
        ],
        "Экшены" => [
            "Half-Life 2",
            "Atomic Heart"
        ],
        "Гонки" => [
            "Forza Horizon 5",
            "Need for Speed: Most Wanted"
        ]
    ],
    "Контакты"
];

function make_menu($menu){
    echo '<ul>';
    foreach ($menu as $key => $submenu) {
        if (is_array($submenu)) {
            echo '<li>' . $key;
            make_menu($submenu);
            echo '</li>';
        } else {
            echo '<li>' . $submenu . '</li>';
        }
    }
    echo '</ul>';
}

make_menu($menu);

echo "<br>";
echo "<br>";

// Задание 6

function filterCities($cities) {
    return array_filter($cities, function($city) {
        return mb_substr($city, 0, 1) === 'К';
    });
}

foreach ($regions as $region => $cities) {
    $filteredCities = filterCities($cities);
    echo $region . ":<br>";
    if (!empty($filteredCities)) 
        echo implode(", ", $filteredCities) . ".<br>";
    echo "<br>";
}
?>