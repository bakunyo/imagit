const $ = require('jquery');
const gm = require('gm');

$(function() {
  $("#repo").change(function(e) {
    $("#commits").html("");
    var simpleGit = require('simple-git')( repo_path );

    simpleGit.log(function(err, logs) {
      logs.all.forEach(function(log) {
        var radio = $("#commit_origin").clone(true);
        radio.val(log["hash"]);
        radio.attr("id", "");
        radio.attr("style", "");
        var li = $("<li>");
        var body = log["date"] + " : " + log["message"];
        li.append(radio);
        li.append(body);
        $("#commits").append(li);
      });
    });
  });

  $(".commit").change(function(e) {
    var hash = e.target.value;
    console.log(hash);
    $("#main").attr("style", "");
  });
});
