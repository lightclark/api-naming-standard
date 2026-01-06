// 基础标准词典：团队统一的命名规范写在这里
const BASE_DICT = {
    "作成": "create",
    "新規": "create",
    "削除": "delete",
    "消去": "delete",
    "更新": "update",
    "編集": "edit",
    "取得": "get",
    "一覧": "list",
    "詳細": "detail",
    "顧客": "customer",
    "情報": "info",
    "設定": "setting",
    "住所": "address",
    "履歴": "history",
    "検索": "search"
};

// 辅助函数：根据词典转换
function translateWord(word, customDict) {
    // 优先级：手动追加 > 标准词典 > 原词
    return customDict[word] || BASE_DICT[word] || word;
}