function addComment() {
    var commentText = document.getElementById("commentField").value;
    if (commentText) {
        var commentsSection = document.querySelector(".comments");
        var newComment = document.createElement("p");
        newComment.setAttribute("dir", "rtl");
        newComment.innerText = "تعليق: " + commentText;
        commentsSection.appendChild(newComment);
        document.getElementById("commentField").value = "";
    } else {
        alert("الرجاء إدخال تعليق قبل الإرسال.");
    }
}
