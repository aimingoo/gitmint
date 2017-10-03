export function english(Text) {
    return Text;
}

export function chinese(Text) {
    return ({
        'Issue Page': '所有评论',
        'Initialize Comments': '初始化本文的评论页',
        'Loading comments...': '加载评论...',
        'Error: Comments Not Initialized': '(未开放评论)',
        'No Comment Yet': '(还没有评论)',
        'Previous': '上一页',
        'Next': '下一页',
        'Nothing to preview': '（没有预览）',
        'Loading preview...': '加载预览...',
        'Submitting...': '正在提交评论...',
        'Comment': '发送',
        'Write': '评论',
        'Preview': '预览',
        'Logging in...': '登入中...',
        'Login to Comment': '请登入以发表评论',
        'Leave a comment': '(发表评论)',
        'Login': '登入',
        'Logout': '退出'
    }[Text] || Text);
}

export function chineseTraditional(Text) {
    return ({
        'Issue Page': '所有評論',
        'Initialize Comments': '初始化本文的評論頁',
        'Loading comments...': '加載評論...',
        'Error: Comments Not Initialized': '(未開放評論)',
        'No Comment Yet': '(還沒有評論)',
        'Previous': '上一頁',
        'Next': '下一頁',
        'Nothing to preview': '（沒有預覽）',
        'Loading preview...': '加載預覽...',
        'Submitting...': '正在提交評論...',
        'Comment': '發送',
        'Write': '評論',
        'Preview': '預覽',
        'Logging in...': '登入中...',
        'Login to Comment': '請登入以發表評論',
        'Leave a comment': '(發表評論)',
        'Login': '登入',
        'Logout': '登出'
    }[Text] || Text);
}

// @see:
//  https://www.w3.org/TR/1999/REC-html401-19991224/struct/dirlang.html#h-8.1.1
//  https://gist.github.com/JamieMason/3748498
export function fromLanguageCode(code) {
    const culture = /^([^-]+)-/
    return ({
        'en': english,
        'zh': chinese,
        'zh-CN': chinese,
        'zh-CHS': chinese,
        'zh-TW': chineseTraditional, 
        'zh-HK': chineseTraditional,
        'zh-CHT': chineseTraditional,
        'en-US': english
    }[code] || (culture.test(code) && fromLanguageCode(code.match(culture)[1])) || english);
}

export default english;