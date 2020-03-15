//必須（fontawsomeのcdn）
var head = document.querySelector("head");
head.insertAdjacentHTML('beforeend', '<link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">');
head.insertAdjacentHTML('beforeend', '<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">');

//css読み込み
var linkElement = document.createElement("link");
linkElement.type = "text/css";
linkElement.rel = "stylesheet";
linkElement.href = "style.css";
head.appendChild(linkElement);

//likeボタン復活
try {
    var LGTM = document.getElementsByClassName('likable')[0].children[1].children[0];
    LGTM.insertAdjacentHTML('beforebegin','<div id="likebtn"></div>');
    LGTM.remove();
    var likebtn = document.getElementById('likebtn');
    likebtn.innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i>';
} catch(e){
    ;
}

try {
    //自分の記事のlikeボタン復活
    var LGTM_mine = document.getElementsByClassName('notLikable')[0].children[1].children[0];
    LGTM_mine.insertAdjacentHTML('beforebegin','<div id="likebtn"></div>');
    LGTM_mine.remove();
    var likebtn_mine = document.getElementById('likebtn');
    likebtn_mine.innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i>';
} catch (e) {
    ;
}

//知り合いのいいね部分復活
try {
    var friend_lgtm = document.getElementsByClassName('it-Header_like')[0].children[0].children[0];
    friend_lgtm.insertAdjacentHTML('beforebegin', '<div id="friendlike"></div>');
    friend_lgtm.remove();
    var friend_like = document.getElementById('friendlike');
    friend_like.innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true" id="friend-like-icon"></i>';
} catch (e) {
    ;
}

//記事末尾のいいねボタン復活
try {
    var LGTM_tail = document.getElementsByClassName('it-Footer_like')[0].children[0].children[0].children[0];
    LGTM_tail.insertAdjacentHTML('beforebegin', '<span class="fa fa-fw fa-thumbs-up"></span>');
    LGTM_tail.insertAdjacentHTML('beforebegin', '<span>いいね</span>');
    LGTM_tail.remove();
    document.getElementsByClassName('it-Footer_like')[0].children[0].style.borderRadius = "4px";
} catch (e) {
    try {
        var LGTM_tail_mine = document.getElementsByClassName('it-Footer_like')[0].children[0];
        LGTM_tail_mine.insertAdjacentHTML('beforebegin', '<i class="fa fa-fw fa-thumbs-up" style="margin-left: 5px"></i>');
        LGTM_tail_mine.insertAdjacentHTML('beforebegin', '<p style="margin-left: 10px;">いいね</p>');
        LGTM_tail_mine.remove();
        document.getElementsByClassName('it-Footer_like')[0].style.display = "flex";
        
        document.getElementsByClassName('it-Footer_like')[0].style.border = "1px solid #55c500";
        document.getElementsByClassName('it-Footer_like')[0].style.borderRadius = "4px";
        document.getElementsByClassName('it-Footer_like')[0].style.color = "#55C500";
    
    } catch (e) {
        ;
    }
}

//記事末尾のいいねボタン復活（自分の記事）


//コメント欄のlikeボタン復活
const comments = document.getElementById('comments');
function LGTM2Like() {
    var LGTMs_comment = document.getElementsByClassName('co-Item_like');
    for (var i = 0; i < LGTMs_comment.length; i++){
        var LGTM_comment = LGTMs_comment[i].children[0].children[0];
        LGTM_comment.insertAdjacentHTML('beforebegin','<div id="likebtn' + String(i) + '" class="likebtn-comment"></div>');
        LGTM_comment.remove();
        var likebtn_comment = document.getElementById('likebtn' + String(i));
        likebtn_comment.innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i>';
    }
}
var mo = new MutationObserver(LGTM2Like);
mo.observe(comments, { childList: true });

