function updateText() {
    const reasons = [
        "You're The Cutest",
        'You Always Smell Good!',
        'You Always Cheer Me Up',
        "You're So Thoughtful",
        'You SEXY',
        'I Love Talking To You',
        "You're A Nerd!",
        "You're So Kind",
        'You Never Give Up',
        'I Love Going On Dates With You',
        "You're Funny!",
        "You're BEAUTIFUL &#128525;",
        'I Love Our Deep Talks',
        'You Have The Cutest Laugh',
        'I Love Spending Time With You',
        'You Have An Amazing Smile',
        'You Make Me Happy',
        'You Like To Run Errands With Me!',
        'You Always Motivate Me To Do Better',
        "You're Always Supportive Of Me",
        "You're Always Down To Chill",
        'I Love Kissing You',
        'You Can Always Make Me Laugh',
        'You Always Help Me Out With Everything',
        "You're Literally The Sweetest Person Ever",
        'I Love Your Booty',
        'You Always Have Stories',
        "You're My Cutie",
        'I Love You',
        'You Make Me Want To Be My Best Self',
        "You're Smart!",
        'I Love Your Eyes',
        "You're My Baby",
        "You're Telapathetic",
        "You Like My Nerd Movies!",
        'You Listen To Me Complain',
        'You Forget Me On The Moon!!'
    ]

    let newReason = reasons[Math.floor(Math.random() * reasons.length)];
    document.getElementById('reasonText').innerHTML = newReason;
}
