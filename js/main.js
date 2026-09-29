const navigation = document.querySelector('.site-nav');
const menuToggle = document.querySelector('.site-nav__toggle');
const navigationLinks = document.querySelectorAll('.site-nav__list a');

const navigationList = document.querySelector('.site-nav__list');
if (navigationList) {
  const blogLinks = [...navigationList.querySelectorAll('a')].filter((link) => link.textContent.trim() === 'BLOG');
  blogLinks.slice(1).forEach((link) => link.closest('li')?.remove());
  if (blogLinks.length === 0) {
    const blogItem = document.createElement('li');
    const blogPath = location.pathname === '/' || location.pathname.endsWith('/index.html') && !location.pathname.includes('/') ? 'blog/' : '../blog/';
    blogItem.innerHTML = `<a href="${blogPath}">BLOG</a>`;
    const accessLink = [...navigationList.querySelectorAll('a')].find((link) => link.textContent.trim() === 'ACCESS');
    navigationList.insertBefore(blogItem, accessLink?.closest('li') || navigationList.lastElementChild);
  }
  const loginLinks = [...navigationList.querySelectorAll('a')].filter((link) => link.textContent.trim() === 'LOGIN');
  loginLinks.slice(1).forEach((link) => link.closest('li')?.remove());
  if (loginLinks.length === 0) {
  const loginItem = document.createElement('li');
  const loginPath = location.pathname.includes('/experience/') || location.pathname.includes('/shop/') ? '../login/' : 'login/';
  loginItem.innerHTML = `<a href="${loginPath}">LOGIN</a>`;
  navigationList.appendChild(loginItem);
  }
}

if (navigation && menuToggle) {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
  });
  navigationLinks.forEach((link) => link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'メニューを開く');
  }));
}

const workshopDescriptions = [
  '12種類から、気になる香りを4種類選びます。',
  '香りの相性を確かめながら、ブレンドします。',
  '自分だけのオードトワレに仕上げます。',
  '完成した香水と、選んだ香料4種を持ち帰ります。'
];
document.querySelectorAll('.workshop-flow li small').forEach((item, index) => {
  if (workshopDescriptions[index]) item.textContent = workshopDescriptions[index];
});
const materials = document.querySelector('.materials-section');
const experienceTitle = document.querySelector('#experience-title');
if (experienceTitle) experienceTitle.innerHTML = '<span>香りをつくる・</span><span>体験する。</span>';
if (materials) {
  const heading = materials.querySelector('h2');
  const lead = materials.querySelector('.experience-section__heading p:last-child');
  if (heading) heading.textContent = '香りに使う素材';
  if (lead) lead.textContent = '植物、果実、花、木、茶など。それぞれ異なる印象を持つ香りを組み合わせます。';
  materials.querySelector('.materials-gallery')?.remove();
}
const infoGrid = document.querySelector('.experience-info-grid');
if (infoGrid && !infoGrid.querySelector('[data-same-day]')) {
  const item = document.createElement('div'); item.dataset.sameDay = 'true';
  item.innerHTML = '<dt>当日参加</dt><dd>空き状況により要確認<br><small>※当日の参加可否は店舗へお問い合わせください。</small></dd>';
  infoGrid.appendChild(item);
}
const scentTypes = document.querySelector('.faq-section');
const workshopSection = document.querySelector('.experience-workshop');
const basicSection = document.querySelector('.basic-information');
if (workshopSection) workshopSection.id = 'workshop';
if (basicSection) basicSection.id = 'basic-information';
if (scentTypes) {
  const faqList = scentTypes.querySelector('.faq-list');
  if (faqList) faqList.innerHTML = '<details><summary>初心者でも参加できますか？</summary><p>はい。初めての方でも参加できます。香りを選びながらスタッフの案内に沿って進める体験です。</p><a class="faq-more" href="#workshop">体験の流れを見る →</a></details><details><summary>どのくらい時間がかかりますか？</summary><p>体験時間は約1時間です。11:00 / 13:00 / 15:00の開催枠があり、開始10分前までに1F受付へお越しください。</p><a class="faq-more" href="#basic-information">予約前の情報を見る →</a></details><details><summary>何を持ち帰れますか？</summary><p>完成したオリジナルのオードトワレ10mlを1本と、選んだ4種類の香料を各10mlずつ持ち帰れます。</p><a class="faq-more" href="#scent-types">香りの種類を見る →</a></details><details><summary>香りは何種類ありますか？</summary><p>通常プランでは、12種類の香料から4種類を選んで組み合わせます。毎月末の土日は、20種類以上から選べる別案内が掲載されています。</p><a class="faq-more" href="#scent-types">香りの種類を見る →</a></details><details><summary>予約変更・キャンセルについて</summary><p>じゃらんnet上のキャンセル締切は体験前日の19:00までです。当日・無連絡キャンセルは体験料金の100％です。</p><a class="faq-more" href="../cancellation/">詳しく見る →</a></details><details><summary>じゃらんへ移動して予約するのですか？</summary><p>はい。体験内容を確認したあと、予約ボタンからじゃらんnetへ移動して予約します。</p><a class="faq-more" href="../reservation-guide/">詳しく見る →</a></details>';
}
if (scentTypes && !document.querySelector('#scent-types')) {
  const scents = [
    ['01','BERGAMOT','ベルガモット','さっぱり　# 大人っぽい','scent-01-bergamot.jpg'],['02','LEMON','レモン','スッキリ　# ナチュラル','scent-02-lemon.jpg'],['03','GRAPEFRUIT','グレープフルーツ','ジューシー　# さわやか','scent-03-grapefruit.jpg'],['04','LAVENDER','ラベンダー','ハーバル　# ナチュラル','scent-04-lavender.jpg'],['05','MUGUET','ミュゲ','さわやか　# 透明感','scent-05-muguet.jpg'],['06','DAMASK ROSE','ダマスクローズ','大人っぽい　# 深い','scent-06-damask-rose.jpg'],['07','ASSAM TEA','アッサムティー','すっきり　# ひと息','scent-07-assam-tea.jpg'],['08','CASSIS','カシス','ジューシー　# 深い','scent-08-cassis.jpg'],['09','MAGNOLIA','マグノリア','やわらかい　# 花','scent-09-magnolia.jpg'],['10','MUSK','ムスク','透明感　# やさしい','scent-10-musk.jpg'],['11','AMBER','アンバー','あたたかい　# 深い','scent-11-amber.jpg'],['12','SANDAL WOOD','サンダルウッド','ウッディ　# 静か','scent-12-sandalwood.jpg'],['L1','SQUASH','スカッシュ','すっきり　# ジューシー','limited-09-squash.jpg'],['L2','SEA BLUE','シーブルー','さわやか　# さっぱり','limited-10-sea-blue.jpg'],['L3','HIBISCUS','ハイビスカス','大人っぽい　# さわやか','limited-11-hibiscus.jpg'],['L4','COCONUT RUM','ココナッツラム','甘い　# クリーミー','limited-12-coconut-rum.jpg']
  ];
  const card = ([number, en, ja, tags, image]) => `<a class="scent-card" href="?scent=${en.toLowerCase().replaceAll(' ','-')}"><img class="scent-card__image" src="../images/experience/scents/${image}" alt="${ja}"><div class="scent-card__body"><span class="scent-card__number">${number}</span><div><strong>${en}</strong><em>${ja}</em><p># ${tags}</p></div><span class="scent-card__arrow">→</span></div></a>`;
  const section = document.createElement('section');
  section.id = 'scent-types'; section.className = 'experience-section scent-types';
  section.innerHTML = `<div class="experience-section__heading"><p class="section-label">SCENT TYPES</p><h2>香りの種類</h2><p class="scent-types__lead">香りの印象を、素材と短い言葉から静かにたどる。今の気分に合う香りを見つけます。</p></div><div class="scent-card-grid">${scents.slice(0,12).map(card).join('')}</div><div class="scent-types__limited"><p class="section-label">LIMITED SCENTS</p><div class="scent-card-grid scent-card-grid--limited">${scents.slice(12).map(card).join('')}</div></div>`;
  scentTypes.parentNode.insertBefore(section, scentTypes);
  section.querySelector('h2').textContent = '香りの種類';
  section.querySelector('.scent-types__lead').innerHTML = '当日は、この中から4種類を選んで組み合わせます。<br><small>※香りの種類は当日の案内により変更になる場合があります。</small>';
  const scentLabels = { BERGAMOT:['ベルガモット','さっぱり　# 大人っぽい'], LEMON:['レモン','スッキリ　# ナチュラル'], GRAPEFRUIT:['グレープフルーツ','ジューシー　# さわやか'], LAVENDER:['ラベンダー','ハーバル　# ナチュラル'], MUGUET:['ミュゲ','さわやか　# 透明感'], 'DAMASK ROSE':['ダマスクローズ','大人っぽい　# 深い'], 'ASSAM TEA':['アッサムティー','すっきり　# ひと息'], CASSIS:['カシス','ジューシー　# 深い'], MAGNOLIA:['マグノリア','やわらかい　# 花'], MUSK:['ムスク','透明感　# やさしい'], AMBER:['アンバー','あたたかい　# 深い'], 'SANDAL WOOD':['サンダルウッド','ウッディ　# 静か'], SQUASH:['スカッシュ','すっきり　# ジューシー'], 'SEA BLUE':['シーブルー','さわやか　# さっぱり'], HIBISCUS:['ハイビスカス','大人っぽい　# さわやか'], 'COCONUT RUM':['ココナッツラム','甘い　# クリーミー'] };
  section.querySelectorAll('.scent-card').forEach((card) => { const en = card.querySelector('strong')?.textContent.trim(); if (scentLabels[en]) { card.querySelector('em').textContent = scentLabels[en][0]; card.querySelector('p').textContent = '# ' + scentLabels[en][1]; } });
}

const page = document.body.dataset.page;
const form = document.querySelector('[data-form]');
const showError = (form, message) => { const error = form.querySelector('.form-error'); if (error) error.textContent = message; };
if (form && page === 'login') {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (!email) return showError(form, 'メールアドレスを入力してください');
    if (!password) return showError(form, 'パスワードを入力してください');
    location.href = '../mypage/';
  });
}
if (form && page === 'register') {
  const preference = document.createElement('fieldset');
  preference.className = 'register-preference';
  preference.innerHTML = '<legend>あなたが香りを選ぶとき、<br>いちばん大切にしたいことは？</legend><p>あなたに合う香りや体験をご案内するためのヒントとして、よければ教えてください。</p><div class="preference-options"><label class="purpose-option"><span class="purpose-option__text">落ち着きたい</span><input type="radio" name="purpose" value="calm"><span class="purpose-option__radio" aria-hidden="true"></span></label><label class="purpose-option"><span class="purpose-option__text">気分を切り替えたい</span><input type="radio" name="purpose" value="refresh"><span class="purpose-option__radio" aria-hidden="true"></span></label><label class="purpose-option"><span class="purpose-option__text">自分らしさを感じたい</span><input type="radio" name="purpose" value="identity"><span class="purpose-option__radio" aria-hidden="true"></span></label><label class="purpose-option"><span class="purpose-option__text">記憶に残る香りがほしい</span><input type="radio" name="purpose" value="memory"><span class="purpose-option__radio" aria-hidden="true"></span></label><label class="purpose-option"><span class="purpose-option__text">贈りものにしたい</span><input type="radio" name="purpose" value="gift"><span class="purpose-option__radio" aria-hidden="true"></span></label><label class="purpose-option"><span class="purpose-option__text">まだわからない</span><input type="radio" name="purpose" value="explore"><span class="purpose-option__radio" aria-hidden="true"></span></label></div>';
  form.querySelector('.check-label').before(preference);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const required = ['name','kana','email','password','passwordConfirm','postal','address','phone'];
    const missing = required.find((name) => !form.elements[name].value.trim());
    if (missing) return showError(form, '未入力の項目があります');
    if (form.elements.password.value !== form.elements.passwordConfirm.value) return showError(form, 'パスワードが一致しません');
    if (!form.elements.terms.checked) return showError(form, '利用規約・プライバシーポリシーに同意してください');
    location.href = '../register/confirm.html';
  });
}
if (form && page === 'forgot') {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.elements.email.value.trim()) return showError(form, 'メールアドレスを入力してください');
    form.innerHTML = '<p class="success-message">再設定用メールを送信しました（デモ）</p><a class="text-link" href="../login/">ログインへ戻る →</a>';
  });
}
