import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Haiku from "../js/haiku.js";

$("form#some-form").submit(function (event) {
  const line1Input = $("input#inputline1").val();
  const line2Input = $("input#inputline2").val();
  const line3Input = $("input#inputline3").val();
  console.log(line1Input);

  let line1SyllableCount = countSyllable();
  pageHaiku.lineArray1 = lineToArray(line1Input);
  $("#line1syllablecount").text(
    " The syllable count for line1 is {line1SyllableCount}"
  );

  event.preventDefault();
});
