const WhatsAppButton = () => {
    const phoneNumber = "201013243373"; // ضع رقم واتساب هنا بدون +

    const handleClick = () => {
        window.open(`https://wa.me/${phoneNumber}`, "_blank");
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-5 right-5 bg-[#F4EFED] text-[#222222] px-4 py-2 rounded-full text-lg shadow-lg hover:bg-[#222222] hover:text-[#F4EFED] transition"
        >
            💬 Chat With Me On Whatsapp
        </button>
    );
};

export default WhatsAppButton;
