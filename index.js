// require('dotenv').config();
// const TelegramBot = require('node-telegram-bot-api');

// const token = process.env.TELEGRAM_BOT_TOKEN;
// const bot = new TelegramBot(token, { polling: true });

// // بدء التفاعل مع المستخدم
// bot.onText(/\/start/, (msg) => {
//   bot.sendMessage(msg.chat.id, `مرحبًا ${msg.from.first_name}، كيف يمكنني مساعدتك اليوم؟`);
// });

// bot.onText(/\/menu/, (msg) => {
//     bot.sendMessage(msg.chat.id, "اختر من القائمة:", {
//       reply_markup: {
//         inline_keyboard: [
//           [{ text: "📋 قائمة الخدمات", callback_data: "services" }],
//           [{ text: "📞 تواصل معنا", callback_data: "contact" }],
//         ]
//       }
//     });
//   });
  
//   bot.on("callback_query", (query) => {
//     const chatId = query.message.chat.id;
  
//     if (query.data === "services") {
//       bot.sendMessage(chatId, "✅ خدماتنا:\n- تصميم مواقع\n- تطوير بوتات\n- دعم فني");
//     } else if (query.data === "contact") {
//       bot.sendMessage(chatId, "📞 للتواصل:\nEmail: contact@youremail.com\nWhatsApp: +213...");
//     }
  
//     bot.answerCallbackQuery(query.id); // لإزالة الانتظار الدائري
//   });
  

// // الرد على أي رسالة عامة
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   const text = msg.text;

//   if (text.toLowerCase().includes("خدمة")) {
//     bot.sendMessage(chatId, "نحن نقدم خدمات تصميم مواقع، تطوير بوتات، ودعم فني.");
//   } else if (text.toLowerCase().includes("شكرا")) {
//     bot.sendMessage(chatId, "على الرحب والسعة!");
//   } else if (text !== "/start") {
//     bot.sendMessage(chatId, "هل يمكنك توضيح طلبك أكثر؟");
//   }
// });

require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

// 🟢 عند بدء المحادثة
bot.start((ctx) => {
  ctx.reply(`👋 أهلًا ${ctx.from.first_name}!
أنا بوت لخدمة عملاء المطور Soufiane Amama 👨‍💻

💡 أستطيع مساعدتك في استكشاف خدماتي البرمجية أو مشاهدة بعض الأعمال السابقة.

اختر من الأزرار التالية:`, 
  Markup.keyboard([
    ['💼 خدماتي', '🧠 منتجات جاهزة'],
    ['📸 أعمالي', '📞 تواصل معي'],
  ]).resize());
});

// 💼 عرض الخدمات
bot.hears('💼 خدماتي', (ctx) => {
  ctx.reply(`✨ أقدم الخدمات التالية:

✅ تطوير متاجر إلكترونية متكاملة.
✅ تصميم صفحات هبوط احترافية.
✅ بناء مواقع بورتفوليو شخصية.
✅ إنشاء مواقع تعريفية للشركات.
✅ تخصيص مشاريع حسب الطلب.

📩 هل ترغب بالحصول على عرض سعر؟`);
});

// 🧠 المنتجات الجاهزة
bot.hears('🧠 منتجات جاهزة', (ctx) => {
  ctx.reply(`🚀 منتجي الحالي:

🎯 منصة إدارة أكاديمية أطفال (كاملة ومخصصة):
لوحة تحكم - تسجيل حضور - دروس - واجهة أولياء الأمور

📌 متاحة للتخصيص والبيع الفوري.

راسلني لعرض مباشر أو تجربة مجانية.`);
});

// 📸 أعمال سابقة
bot.hears('📸 أعمالي', (ctx) => {
//   ctx.replyWithPhoto(
//     { url: 'رابط صورة لعملك 1' },
//     { caption: '💼 متجر إلكتروني حديث 🎯' }
//   );
//   ctx.replyWithPhoto(
//     { url: 'رابط صورة لعملك 2' },
//     { caption: '🌐 صفحة هبوط لمنتج رقمي' }
//   );
  ctx.replyWithPhoto(
    { url: 'https://i.postimg.cc/XNDRX3YD/IMG-20250412-183451-438.jpg' },
    { caption: '💼 موقع بورتفوليو لعرض أعمالك 🎯' }
  );
  ctx.reply('📩 للمزيد من الأعمال، راسلني!');
});

// 📞 تواصل مباشر
bot.hears('📞 تواصل معي', (ctx) => {
  ctx.reply(`📬 يمكنك التواصل معي عبر:

📧 الإيميل: amamasoufian@gmail.com
📱 واتساب: +213676169200
📨 تيليجرام: @Sifo_Amama

💡 سأكون سعيدًا بالإجابة على أسئلتك وتقديم عرض سعر.`);
});

bot.launch();

