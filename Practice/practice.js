

// Data for exercises based on programming languages
const exercises = {
    html: [
        {
            name: "Create a simple webpage",
            code: `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Simple Webpage</title>
                </head>
                <body>
                    <h1>Hello, World!</h1>
                    <p>This is a simple webpage.</p>
                </body>
                </html>
            `,
            output: `<h1>Hello, World!</h1><p>This is a simple webpage.</p>`
        },
        {
            name: "Create a webpage section",
            code: `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Simple Webpage</title>
                </head>
                <body>
                    <h1>Hello, World!</h1>
                    <p>This is a simple webpage.</p>
                </body>
                </html>
            `,
            output: `<!DOCTYPE html>
            <html>
            <head>
                <title>Text Practice</title>

                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

                <style>

                </style>
            </head>
            <body>
                <p class="video-title">
                Talking Tech and AI with Google CEO Sundar Pichai!
                </p>

                <p class="video-stats">
                3.4M views &#183; 6 months ago
                </p>

                <p class="video-author">
                Marques Brownlee &#10003;
                </p>

                <p class="video-description">
                Talking tech and AI on the heels of Google I/O. Also a daily driver phone reveal from Google's CEO. Shoutout to Sundar!
                </p>

                <p class="apple-text">
                Shop early for the best selection of holiday favourites. <span class="shop-link">Shop now &#62;</span>
                </p>

                <p>
                Shop early for the <strong>best selection</strong> of <u>holiday</u> favourites. <span class="span-example">Shop now</span>
                </p>
            </body>
            </html>`
        },
        {
            name: "Add text with styling using CSS",
            code: `
                <style>
                    p {
                        color: blue;
                        font-size: 20px;
                    }
                </style>
                <p>This text is styled using CSS.</p>
            `,
            output: `<p style="color: blue; font-size: 20px;">This text is styled using CSS.</p>`
        }
    ],

    grid: [
        {
            name: "Working with GRID",
            code: `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Simple Webpage</title>
                </head>
                <body>
                    <h1>Hello, World!</h1>
                    <p>This is a simple webpage.</p>
                </body>
                </html>
            `,
            output: `
            <html>
            <head>
                <style>
                    .grid {
                    display: grid;
                    grid-template-columns: 200px 75px;
                    }

                    .lightblue {
                    background-color: lightblue;
                    }

                    .lightpink {
                    background-color: lightpink;
                    }
                </style>
            </head>
            <body>
                <div class="grid">
                <div class="lightblue">200px</div>
                <div class="lightpink">75px</div>
                </div>
            </body>
            </html>

            `
        },
        {
            name: "Working with GRID 2",
            code: `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Simple Webpage</title>
                </head>
                <body>
                    <h1>Hello, World!</h1>
                    <p>This is a simple webpage.</p>
                </body>
                </html>
            `,
            output: `
            <html>
            <head>
                <style>
                    .grid {
                    display: grid;
                    grid-template-columns: 50px 1fr 75px;
                    }

                    .lightblue {
                    background-color: lightblue;
                    }

                    .lightpink {
                    background-color: lightpink;
                    }     
                </style>
            </head>
            <body>
                <div class="grid">
                <div class="lightblue">col1</div>
                <div class="lightpink">col2</div>
                <div class="lightblue">col3</div>
                </div>
            </body>
            </html>
            `
        },
        {
            name: "Working with GRID 3",
            code: `
                <style>
                    p {
                        color: blue;
                        font-size: 20px;
                    }
                </style>
                <p>This text is styled using CSS.</p>
            `,
            output: `
            <html>
            <head>
                <style>
                    .grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    column-gap: 20px;
                    row-gap: 10px;
                    }

                    .lightpink {
                    background-color: lightpink;
                    }
                </style>
            </head>
            <body>
                <div class="grid">
                <div class="lightpink">col1</div>
                <div class="lightpink">col2</div>
                <div class="lightpink">col3</div>
                <div class="lightpink">col4</div>
                <div class="lightpink">col1</div>
                <div class="lightpink">col2</div>
                <div class="lightpink">col3</div>
                <div class="lightpink">col4</div>
                </div>
            </body>
            </html>
            `
        },
        {
            name: "Example of GRID",
            code: `
                <style>
                    p {
                        color: blue;
                        font-size: 20px;
                    }
                </style>
                <p>This text is styled using CSS.</p>
            `,
            output: `
            <html>
            <head>
                <style>
                    p {
                    font-family: Arial;
                    margin-top: 0;
                    margin-bottom: 0;
                    }

                    .grid {
                    display: grid;
                    grid-template-columns: 200px 200px 200px;
                    column-gap: 20px;
                    }

                    .profile {
                    width: 200px;
                    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
                    vertical-align: top;
                    margin-right: 15px;
                    }

                    .profile-picture {
                    width: 200px;
                    height: 200px;
                    object-fit: cover;
                    margin-bottom: 12px;
                    }

                    .name {
                    font-size: 18px;
                    font-weight: bold;
                    margin-left: 8px;
                    margin-bottom: 5px;
                    }

                    .mutual-friends-row {
                    display: grid;
                    grid-template-columns: 35px 1fr;
                    align-items: center;
                    margin-left: 8px;
                    margin-bottom: 10px;
                    }

                    .mutual-friend-picture {
                    height: 28px;
                    width: 28px;
                    object-fit: cover;
                    border-radius: 14px;
                    vertical-align: middle;
                    margin-right: 4px;
                    }

                    .mutual-friends {
                    color: rgb(100, 100, 100);
                    }

                    .add-friend-button {
                    background-color: rgb(24, 119, 242);
                    color: white;
                    border: none;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    padding-left: 20px;
                    padding-right: 20px;
                    border-radius: 4px;
                    font-size: 16px;
                    margin-left: 8px;
                    margin-bottom: 10px;
                    }
                </style>
            </head>
            <body>
                <div class="grid">
                <div class="profile">
                    <img class="profile-picture" src="cat.jpg">
                    <p class="name">
                    Oliver
                    </p>
                    <div class="mutual-friends-row">
                    <img class="mutual-friend-picture" src="dog2.jpg">
                    <p class="mutual-friends">
                        2 mutual friends
                    </p>
                    </div>
                    <button class="add-friend-button">
                    Add Friend
                    </button>
                </div>

                <div class="profile">
                    <img class="profile-picture" src="cat2.jpg">
                    <p class="name">
                    Mimi
                    </p>
                    <div class="mutual-friends-row">
                    <img class="mutual-friend-picture" src="dog2.jpg">
                    <p class="mutual-friends">
                        3 mutual friends
                    </p>
                    </div>
                    <button class="add-friend-button">
                    Add Friend
                    </button>
                </div>

                <div class="profile">
                    <img class="profile-picture" src="dog.jpg">
                    <p class="name">
                    Rex
                    </p>
                    <div class="mutual-friends-row">
                    <img class="mutual-friend-picture" src="dog2.jpg">
                    <p class="mutual-friends">
                        4 mutual friends
                    </p>
                    </div>
                    <button class="add-friend-button">
                    Add Friend
                    </button>
                </div>
                </div>
            </body>
            </html>
            `
        }
    ],

    flex: [
        {
            name: "Practice Set I",
            code: `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Simple Webpage</title>
                </head>
                <body>
                    <h1>Hello, World!</h1>
                    <p>This is a simple webpage.</p>
                </body>
                </html>
            `,
            output: `
            <html>
            <head>
                <style>
                    div {
                    font-family: Arial;
                    }

                    .container {
                    border-width: 1px;
                    border-style: solid;
                    border-color: rgb(200, 200, 200);
                    width: 300px;
                    border-radius: 6px;
                    }

                    .flexbox {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 6px;
                    padding-bottom: 6px;
                    padding-left: 12px;
                    padding-right: 12px;
                    }

                    .notifications {
                    background-color: rgb(49, 109, 245);
                    color: white;
                    padding-top: 3px;
                    padding-bottom: 3px;
                    padding-left: 10px;
                    padding-right: 10px;
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                <div class="flexbox">
                    <div>Home</div>
                    <div class="notifications">14</div>
                </div>
                <div class="flexbox">
                    <div>Notifications</div>
                    <div class="notifications">3</div>
                </div>
                <div class="flexbox">
                    <div>Messages</div>
                    <div class="notifications">5</div>
                </div>
                </div>
            </body>
            </html>
            `
        },
        {
            name: "Practice Set II",
            code: `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Simple Webpage</title>
                </head>
                <body>
                    <h1>Hello, World!</h1>
                    <p>This is a simple webpage.</p>
                </body>
                </html>
            `,
            output: `
            <html>
            <head>
                <style>
                    div {
                    font-family: Arial;
                    }

                    .header {
                    background-color: rgb(120, 82, 178);
                    color: white;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    padding-left: 15px;
                    padding-right: 15px;
                    }

                    .home-link {
                    font-weight: bold;
                    }

                    .text-box {
                    width: 500px;
                    border: none;
                    margin-top: 12px;
                    margin-bottom: 12px;
                    height: 30px;
                    border-radius: 15px;
                    padding-left: 20px;
                    }

                    button {
                    background-color: rgb(120, 82, 178);
                    color: white;
                    font-size: 16px;
                    border-width: 1px;
                    border-style: solid;
                    border-color: white;
                    border-radius: 2px;
                    padding-top: 8px;
                    padding-bottom: 8px;
                    padding-left: 15px;
                    padding-right: 15px;
                    }
                </style>
            </head>
            <body>
                <div class="header">
                <div class="home-link">Home</div>
                <input class="text-box" placeholder="Search">
                <button>Download</button>
                </div>
            </body>
            </html>
            `
        },
        {
            name: "Practice Set III",
            code: `
                <style>
                    p {
                        color: blue;
                        font-size: 20px;
                    }
                </style>
                <p>This text is styled using CSS.</p>
            `,
            output: `
            <html>
            <head>
                <style>
                    p {
                    font-family: Arial;
                    margin-top: 0;
                    margin-bottom: 0;
                    }

                    .row {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin-bottom: 20px;
                    }

                    .profile-picture {
                    height: 50px;
                    width: 50px;
                    object-fit: cover;
                    border-radius: 25px;
                    margin-right: 15px;
                    }

                    .info {
                    width: 200px;
                    }

                    .name {
                    font-weight: bold;
                    margin-bottom: 3px;
                    }

                    .handle {
                    color: rgb(150, 150, 150);
                    margin-bottom: 5px;
                    }

                    .category {
                    color: rgb(150, 150, 150);
                    font-size: 14px;
                    }

                    .follow-button {
                    background-color: rgb(29, 155, 240);
                    color: white;
                    border: none;
                    font-size: 16px;
                    font-weight: bold;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    padding-left: 15px;
                    padding-right: 15px;
                    border-radius: 4px;
                    cursor: pointer;
                    }
                </style>
            </head>
            <body>
                <div class="row">
                <img class="profile-picture" src="cat.jpg">
                <div class="info">
                    <p class="name">oliver</p>
                    <p class="handle">the cat</p>
                    <p class="category">Popular</p>
                </div>
                <button class="follow-button">Follow</button>
                </div>

                <div class="row">
                <img class="profile-picture" src="cat2.jpg">
                <div class="info">
                    <p class="name">Mimi</p>
                    <p class="handle">Sleepy Cat</p>
                    <p class="category">Popular</p>
                </div>
                <button class="follow-button">Follow</button>
                </div>

                <div class="row">
                <img class="profile-picture" src="dog.jpg">
                <div class="info">
                    <p class="name">Rex</p>
                    <p class="handle">Happy Bulldog</p>
                    <p class="category">Popular</p>
                </div>
                <button class="follow-button">Follow</button>
                </div>
            </body>
            </html>
            `
        }
    ],

    css: [
        {
            name: "Create a webpage section with CSS",
            code: `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Simple Webpage</title>
                </head>
                <body>
                    <h1>Hello, World!</h1>
                    <p>This is a simple webpage.</p>
                </body>
                </html>
            `,
            output: `<!DOCTYPE html>
            <html>
            <head>
                <title>Text Practice</title>

                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

                <style>
                    p {
                    font-family: Roboto;
                    margin-top: 0;
                    margin-bottom: 0;
                    }

                    .video-stats {
                    font-size: 14px;
                    color: rgb(96, 96, 96);
                    margin-bottom: 20px;
                    }

                    .video-title {
                    font-weight: bold;
                    font-size: 18px;
                    width: 280px;
                    line-height: 24px;
                    margin-bottom: 5px;
                    }

                    .video-author {
                    font-size: 14px;
                    color: rgb(96, 96, 96);
                    margin-bottom: 20px;
                    }

                    .video-description {
                    font-size: 14px;
                    color: rgb(96, 96, 96);
                    width: 280px;
                    line-height: 22px;
                    margin-bottom: 100px;
                    }

                    .apple-text {
                    margin-bottom: 50px;
                    font-size: 14px;
                    background-color: rgb(227, 65, 64);
                    color: white;
                    text-align: center;
                    padding-top: 18px;
                    padding-bottom: 18px;
                    }

                    .span-example {
                    color: red;
                    }

                    .span-example:hover {
                    text-decoration: underline;
                    }

                    .shop-link {
                    cursor: pointer;
                    }

                    .shop-link:hover {
                    text-decoration: underline;
                    }
                </style>
            </head>
            <body>
                <p class="video-title">
                Talking Tech and AI with Google CEO Sundar Pichai!
                </p>

                <p class="video-stats">
                3.4M views &#183; 6 months ago
                </p>

                <p class="video-author">
                Marques Brownlee &#10003;
                </p>

                <p class="video-description">
                Talking tech and AI on the heels of Google I/O. Also a daily driver phone reveal from Google's CEO. Shoutout to Sundar!
                </p>

                <p class="apple-text">
                Shop early for the best selection of holiday favourites. <span class="shop-link">Shop now &#62;</span>
                </p>

                <p>
                Shop early for the <strong>best selection</strong> of <u>holiday</u> favourites. <span class="span-example">Shop now</span>
                </p>
            </body>
            </html>`
        },

        {
            name: "Text Styling and practicing 1",
            code: `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Simple Webpage</title>
                </head>
                <body>
                    <h1>Hello, World!</h1>
                    <p>This is a simple webpage.</p>
                </body>
                </html>
            `,
            output: `
            <style>
            p {
                font-family: Arial;
                text-align: center;
                margin-top: 0;
                margin-bottom: 0;
            }

            .new {
                color: rgb(245, 99, 0);
                margin-bottom: 10px;
            }

            .product {
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 5px;
            }

            .title {
                font-size: 45px;
                font-weight: bold;
                margin-bottom: 15px;
            }

            .price {
                margin-bottom: 25px;
            }

            .buy {
                background-color: rgb(0, 113, 227);
                color: white;
                padding-top: 7px;
                padding-bottom: 7px;
                padding-left: 15px;
                padding-right: 15px;
                border-radius: 30px;
                font-weight: bold;
                cursor: pointer;
            }
            </style>

            <p class="new">
            New
            </p>

            <p class="product">
            MacBook Pro
            </p>

            <p class="title">
            Supercharged for pros.
            </p>

            <p class="price">
            From $1999
            </p>

            <p>
            <span class="buy">Buy</span>
            </p>
            `
        },

        
        {
            name: "Text Styling and practicing 2",
            code: `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Simple Webpage</title>
                </head>
                <body>
                    <h1>Hello, World!</h1>
                    <p>This is a simple webpage.</p>
                </body>
                </html>
            `,
            output: `
            
            <style>
            p {
                font-family: Arial;
                margin-top: 0;
                margin-bottom: 0;
            }

            .price {
                font-size: 32px;
                margin-bottom: 5px;
            }

            .currency {
                font-size: 16px;
                color: rgb(100, 100, 100);
            }

            .change {
                color: rgb(24, 128, 56);
                margin-bottom: 8px;
            }

            .after-hours {
                color: rgb(100, 100, 100);
            }

            .after-hours-change {
                color: rgb(235, 39, 39);
            }
            </style>

            <p class="price">
            1,049.61 <span class="currency">USD</span>
            </p>

            <p class="change">
            +18.05 (1.75%) today
            </p>

            <p class="after-hours">
            After hours 1,048.00
            <span class="after-hours-change">-1.61 (0.15%)</span>
            </p>
            `
        },

        
        {
            name: "Text Styling and practicing 3",
            code: `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Simple Webpage</title>
                </head>
                <body>
                    <h1>Hello, World!</h1>
                    <p>This is a simple webpage.</p>
                </body>
                </html>
            `,
            output: `
            <style>
            p {
                font-family: Arial;
                font-size: 18px;
                margin-top: 0;
                margin-bottom: 0;
            }

            .tweet-header {
                margin-bottom: 5px;
            }

            .tweet-author {
                font-weight: bold;
            }

            .tweet-info {
                color: rgb(100, 100, 100);
            }

            .tweet {
                width: 600px;
                line-height: 25px;
                margin-bottom: 20px;
            }

            .twitter-handle {
                color: rgb(29, 155, 240);
            }
            </style>

            <p class="tweet-header">
            <span class="tweet-author">freeCodeCamp.org</span>
            <span class="tweet-info">@freeCodeCamp 1h</span>
            </p>

            <p class="tweet">
            As a web developer, you'll want to make your projects easy to use and navigate around.
            </p>

            <p class="tweet">
            Here <span class="twitter-handle">@chp_it</span> outlines the top skills new developers should have.
            </p>
            `
        },

        {
            name: "Create a button with CSS",
            code: `
                <style>
                    .btn {
                        background-color: #4caf50;
                        color: white;
                        padding: 10px 20px;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                </style>
                <button class="btn">Click Me</button>
            `,
            output: `<button class="btn" style="background-color: #4caf50; color: white; padding: 10px 20px; border-radius: 5px;">Click Me</button>`
        },
        {
            name: "Create these button with CSS",
            code: `
                <style>
                    .btn {
                        background-color: #4caf50;
                        color: white;
                        padding: 10px 20px;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                </style>
                <button class="btn">Click Me</button>
            `,
            output: `<style>
            .subscribe-button {
                background-color: rgb(200, 0, 0);
                color: white;
                border: none;
                height: 36px;
                width: 105px;
                border-radius: 2px;
                cursor: pointer;
                margin-right: 8px;
            }

            .join-button {
                background-color: white;
                border-color: rgb(41, 118, 211);
                border-style: solid;
                border-width: 1px;
                color: rgb(41, 118, 211);
                height: 36px;
                width: 62px;
                border-radius: 2px;
                cursor: pointer;
            }

            .tweet-button {
                background-color: rgb(2, 158, 255);
                color: white;
                border: none;
                height: 36px;
                width: 74px;
                border-radius: 8px;
                border-radius: 18px;
                font-weight: bold;
                font-size: 15px;
                cursor: pointer;
                margin-left: 8px;
            }
            </style>

            <button class="subscribe-button">
            SUBSCRIBE
            </button>

            <button class="join-button">
            JOIN
            </button>

            <button class="tweet-button">
            Tweet
            </button>`
        },
        {
            name: "Buttons with Hover Properties",
            code: `
                <style>
                    .btn {
                        background-color: #4caf50;
                        color: white;
                        padding: 10px 20px;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                </style>
                <button class="btn">Click Me</button>
            `,
            output: `<style>
            .subscribe-button {
                background-color: rgb(200, 0, 0);
                color: white;
                border: none;
                height: 36px;
                width: 105px;
                border-radius: 2px;
                cursor: pointer;
                margin-right: 8px;
                transition: opacity 0.15s;
            }

            .subscribe-button:hover {
                opacity: 0.8;
            }

            .subscribe-button:active {
                opacity: 0.5;
            }

            .join-button {
                background-color: white;
                border-color: rgb(41, 118, 211);
                border-style: solid;
                border-width: 1px;
                color: rgb(41, 118, 211);
                height: 36px;
                width: 62px;
                border-radius: 2px;
                cursor: pointer;

                transition: background-color 0.15s,
                color 0.15s;
            }

            .join-button:hover {
                background-color: rgb(41, 118, 211);
                color: white;
            }

            .join-button:active {
                opacity: 0.7;
            }

            .tweet-button {
                background-color: rgb(2, 158, 255);
                color: white;
                border: none;
                height: 36px;
                width: 74px;
                border-radius: 8px;
                border-radius: 18px;
                font-weight: bold;
                font-size: 15px;
                cursor: pointer;
                margin-left: 8px;
                transition: box-shadow 0.15s;
            }

            .tweet-button:hover {
                box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
            }
            </style>

            <button class="subscribe-button">
            SUBSCRIBE
            </button>

            <button class="join-button">
            JOIN
            </button>

            <button class="tweet-button">
            Tweet
            </button>`
        },
        {
            name: "Extra examples for practice",
            code: `
                <style>
                    .btn {
                        background-color: #4caf50;
                        color: white;
                        padding: 10px 20px;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                </style>
                <button class="btn">Click Me</button>
            `,
            output: `
            <style>
            .uber-button {
                background-color: black;
                color: white;
                border: none;
                height: 40px;
                width: 110px;
                cursor: pointer;
            }
            </style>

            <button class="uber-button">
            Request now
            </button>


            <style>
            .amazon-button {
                background-color: rgb(255, 216, 20);
                border: none;
                height: 30px;
                width: 140px;
                border-radius: 15px;
                cursor: pointer;
            }
            </style>

            <button class="amazon-button">
            Add to Cart
            </button>


            <style>
            .github-button {
                background-color: rgb(46, 164, 79);
                color: white;
                border: none;
                height: 40px;
                width: 90px;
                font-weight: bold;
                font-size: 15px;
                border-radius: 6px;
                cursor: pointer;
            }
            </style>

            <button class="github-button">
            Sign up
            </button>


            <style>
            .get-started-button {
                background-color: rgb(121, 82, 179);
                color: white;
                border: none;
                height: 40px;
                width: 110px;
                font-weight: bold;
                border-radius: 4px;
                cursor: pointer;
                margin-right: 6px;
            }

            .download-button {
                background-color: white;
                color: rgb(108, 117, 125);
                border-width: 1px;
                border-style: solid;
                border-color: rgb(108, 117, 125);
                height: 40px;
                width: 100px;
                font-weight: bold;
                border-radius: 4px;
                cursor: pointer;
            }
            </style>

            <button class="get-started-button">
            Get started
            </button>

            <button class="download-button">
            Download
            </button>


            <style>
            .apply-button {
                background-color: rgb(10, 102, 194);
                color: white;
                border: none;
                height: 40px;
                width: 240px;
                font-weight: bold;
                font-size: 15px;
                border-radius: 20px;
                cursor: pointer;
                margin-right: 8px;
            }

            .save-button {
                background-color: white;
                color: rgb(10, 102, 194);
                border-width: 1px;
                border-style: solid;
                border-color: rgb(10, 102, 194);
                height: 40px;
                width: 80px;
                font-weight: bold;
                font-size: 15px;
                border-radius: 20px;
                cursor: pointer;
            }
            </style>

            <button class="apply-button">
            Apply on company website
            </button>

            <button class="save-button">
            Save
            </button>

            `
        },
        {
            name: "Extra examples Hover properties",
            code: `
                <style>
                    .btn {
                        background-color: #4caf50;
                        color: white;
                        padding: 10px 20px;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                </style>
                <button class="btn">Click Me</button>
            `,
            output: `
            <style>
            .uber-button {
                background-color: black;
                color: white;
                border: none;
                height: 40px;
                width: 110px;
                cursor: pointer;
                transition: opacity 0.15s;
            }

            .uber-button:hover {
                opacity: 0.8;
            }
            </style>

            <button class="uber-button">
            Request now
            </button>


            <style>
            .amazon-button {
                background-color: rgb(255, 216, 20);
                border: none;
                height: 30px;
                width: 140px;
                border-radius: 15px;
                cursor: pointer;
            }

            .amazon-button:hover {
                background-color: rgb(245, 205, 3);
            }
            </style>

            <button class="amazon-button">
            Add to Cart
            </button>


            <style>
            .github-button {
                background-color: rgb(46, 164, 79);
                color: white;
                border: none;
                height: 40px;
                width: 90px;
                font-weight: bold;
                font-size: 15px;
                border-radius: 6px;
                cursor: pointer;
                transition: box-shadow 0.15s;
            }

            .github-button:hover {
                box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.15);
            }
            </style>

            <button class="github-button">
            Sign up
            </button>


            <style>
            .get-started-button {
                background-color: rgb(121, 82, 179);
                color: white;
                border: none;
                height: 40px;
                width: 110px;
                font-weight: bold;
                border-radius: 4px;
                cursor: pointer;
                margin-right: 6px;
                transition: background-color 0.15s;
            }

            .get-started-button:hover {
                background-color: rgb(99, 60, 156);
            }

            .download-button {
                background-color: white;
                color: rgb(108, 117, 125);
                border-width: 1px;
                border-style: solid;
                border-color: rgb(108, 117, 125);
                height: 40px;
                width: 100px;
                font-weight: bold;
                border-radius: 4px;
                cursor: pointer;
                transition: background-color 0.15s,
                color 0.15s;
            }

            .download-button:hover {
                background-color: rgb(108, 117, 125);
                color: white;
            }
            </style>

            <button class="get-started-button">
            Get started
            </button>

            <button class="download-button">
            Download
            </button>


            <style>
            .apply-button {
                background-color: rgb(10, 102, 194);
                color: white;
                border: none;
                height: 40px;
                width: 240px;
                font-weight: bold;
                font-size: 15px;
                border-radius: 20px;
                cursor: pointer;
                margin-right: 8px;
                transition: background-color 0.15s;
            }

            .apply-button:hover {
                background-color: rgb(2, 70, 138);
            }

            .save-button {
                background-color: white;
                color: rgb(10, 102, 194);
                border-width: 1px;
                border-style: solid;
                border-color: rgb(10, 102, 194);
                height: 40px;
                width: 80px;
                font-weight: bold;
                font-size: 15px;
                border-radius: 20px;
                cursor: pointer;
                transition: background-color 0.15s,
                border-width 0.15s;
            }

            .save-button:hover {
                background-color: rgb(226, 240, 254);
                border-width: 2px;
            }
            </style>

            <button class="apply-button">
            Apply on company website
            </button>

            <button class="save-button">
            Save
            </button>   
            `
        },
        {
            name: "Combined Example",
            code: `
                <style>
                    .btn {
                        background-color: #4caf50;
                        color: white;
                        padding: 10px 20px;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                </style>
                <button class="btn">Click Me</button>
            `,
            output: `
            <style>
            .amazon-link {
                color: rgb(0, 113, 133);
            }

            .amazon-link:hover {
                color: rgb(199, 81, 31);
            }

            .title {
                font-size: 24px;
                font-weight: bold;
            }

            .price {
                color: rgb(0, 136, 0);
                font-weight: bold;
            }

            .add-to-cart-button {
                background-color: rgb(249, 217, 76);
                border: none;
                height: 30px;
                width: 110px;
                border-radius: 15px;
                margin-right: 8px;
                cursor: pointer;
            }

            .add-to-cart-button:hover {
                background-color: rgb(247, 202, 0);
            }

            .add-to-cart-button:active {
                opacity: 0.5;
            }

            .buy-now-button {
                background-color: rgb(255, 164, 28);
                border: none;
                height: 30px;
                width: 110px;
                border-radius: 15px;
                cursor: pointer;
            }

            .buy-now-button:hover {
                background-color: rgb(250, 137, 0);
            }

            .buy-now-button:active {
                opacity: 0.5;
            }
            </style>

            <a class="amazon-link" href="https://amazon.com">
            Back to Amazon
            </a>

            <p class="title">
            Nike Black Running Shoes
            </p>

            <p class="price">
            $39 - in stock.
            </p>

            <p>
            Free delivery tomorrow.
            </p>

            <button class="add-to-cart-button">
            Add to Cart
            </button>

            <button class="buy-now-button">
            Buy now
            </button>
            `
        }
    ],
    js: [
        {
            name: "Alert a message",
            code: `
                <button onclick="alert('Hello, World!')">Click Me</button>
            `,
            output: `<button onclick="alert('Hello, World!')">Click Me</button>`
        }
    ]
};

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Show exercises for the selected language
function showExercises(language) {
    const exercisesSection = document.getElementById('exercises');
    exercisesSection.style.display = 'block';
    exercisesSection.innerHTML = ''; // Clear previous content

    exercises[language].forEach((exercise, index) => {
        const exerciseButton = document.createElement('button');
        exerciseButton.classList.add('exercise-btn');
        exerciseButton.textContent = exercise.name;
        exerciseButton.onclick = () => showOutput(exercise);
        exercisesSection.appendChild(exerciseButton);
    });
}

// Show output for the selected exercise
function showOutput(exercise) {
    const outputSection = document.getElementById('output-section');
    const outputContainer = document.getElementById('output-container');

    outputSection.style.display = 'block';
    outputContainer.innerHTML = exercise.output; // Display the result
}
