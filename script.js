document.getElementById('generate-btn').addEventListener('click', generateIdea);
document.getElementById('translate-btn').addEventListener('click', translateIdea);

const ideas = {
    tech: [
        'فكرة لتطبيق واقع معزز لتعليم اللغات.',
        'موقع لتحليل البيانات باستخدام الذكاء الاصطناعي.'
    ],
    mobile: [
        'تطبيق موبايل لإدارة الوقت وتحقيق الأهداف.',
        'تطبيق لمشاركة الكتب الصوتية بين المستخدمين.'
    ],
    product: [
        'منتج ذكي لتنظيم المنزل باستخدام الذكاء الاصطناعي.',
        'منتج صديق للبيئة لتحويل النفايات إلى طاقة.'
    ]
};

function generateIdea() {
    const category = document.getElementById('category-select').value;
    const randomIdea = ideas[category][Math.floor(Math.random() * ideas[category].length)];
    document.getElementById('idea-text').textContent = randomIdea;
}

function translateIdea() {
    const ideaText = document.getElementById('idea-text').textContent;
    if (ideaText === 'اضغط على زر توليد الفكرة للحصول على فكرة جديدة.') return;
    // يمكنك إضافة ترجمة باستخدام Google Translate API أو أي API ترجمة أخرى.
    alert('تم ترجمة الفكرة: ' + ideaText);
}
