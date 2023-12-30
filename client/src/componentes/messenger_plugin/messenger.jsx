import { useEffect } from "react";


export default function Messenger() {

   
    useEffect(() => {

        let chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "107477932337390");
        chatbox.setAttribute("attribution", "biz_inbox");

        window.fbAsyncInit = function () {
            FB.init({
                xfbml: true,
                version: 'v16.0'
            });
        };

        (function (d, s, id) {
            let js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/pt_PT/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    }, []);

    return (
        <div>
            <div id="fb-root"></div>
            <div id="fb-customer-chat" className="fb-customerchat">
            </div>
        </div>
    )
}

