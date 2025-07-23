const prayers = {
    prayer1: "Lord, make me an instrument of your peace.",
    prayer2: "Heavenly Father, I thank you for this day.",
    prayer3: "God, grant me the serenity to accept the things I cannot change.",
    prayer4: "Our Father, who art in heaven, hallowed be thy name.",
    prayer5: "Lord, hear my prayer and let my cry come unto you.",
    prayer6: "May the Lord bless you and keep you.",
    prayer7: "Guide me, O Thou great Jehovah, pilgrim through this barren land."
};

function showPrayer(prayerId) {
    document.getElementById('prayer-display').innerHTML = `<p>${prayers[prayerId]}</p>`;
}