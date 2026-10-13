const form = document.getElementById("leadForm");
const msg = document.getElementById("msg");
const btn = document.getElementById("btn");

const SEU_NUMERO_WHATSAPP = "5571992930117";

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    btn.innerText = "Enviando...";
    btn.style.background = "#16a34a";
    msg.innerText = "";

    try {
        const response = await fetch("https://automacao-leads-lblw.onrender.com/lead", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nome, telefone, mensagem }),
        });

        if (response.ok) {
            msg.className = "mt-4 text-center text-sm font-medium text-emerald-400";
            msg.innerText = "✅ Lead salvo! Redirecionando para o WhatsApp...";
        } else {
            msg.className = "mt-4 text-center text-sm font-medium text-amber-400";
            msg.innerText = "⚠️ Quase lá! Redirecionando para o seu WhatsApp...";
        }
    } catch (error) {
        msg.className = "mt-4 text-center text-sm font-medium text-emerald-400";
        msg.innerText = "✅ Redirecionando para o WhatsApp...";
    }

    setTimeout(() => {
        const textoWhatsApp = `Olá! Meu nome é *${nome}* (WhatsApp: ${telefone}). ${mensagem ? "Mensagem: " + mensagem : "Quero saber mais sobre automação de atendimento."}`;
        const urlWhatsApp = `https://wa.me/${SEU_NUMERO_WHATSAPP}?text=${encodeURIComponent(textoWhatsApp)}`;

        window.location.href = urlWhatsApp;

        form.reset();
        btn.innerHTML = "<span>🚀 Quero automatizar meu atendimento</span>";
        btn.style.background = "";
    }, 1200);
});
