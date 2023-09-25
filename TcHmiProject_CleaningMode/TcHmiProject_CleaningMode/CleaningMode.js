// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.48/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject_CleaningMode;
        (function (TcHmiProject_CleaningMode) {
            function CleaningMode(ctx, waitTime) {

                // return if no time is set
                if (waitTime == 0) return;

                // Add overlay
                var cleaningOverlay = $('<div><div id="countdown-cleaning" style="font-size: 64px;color:white;"></div><svg id="icon-cleaning" xmlns="http://www.w3.org/2000/svg" height="65px" width="65px" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="white" d="M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6v29.1L364.3 320h29.1c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z"/></svg></div>');
                TcHmi.TopMostLayer.add(this, cleaningOverlay, {
                    centerHorizontal: true,
                    centerVertical: true,
                    closeOnBackground: false
                });

                const countdownElement = document.getElementById("countdown-cleaning");
                let countdownValue = waitTime;

                //Set icon animation
                document.getElementById("icon-cleaning").animate([
                    { transform: 'translate3d(0, 0, 0)' },
                    { transform: 'translate3d(-10px, 0, 0)' },
                    { transform: 'translate3d(10px, 0, 0)' }
                ], {
                    duration: 500,
                    iterations: Infinity,
                    direction: "normal"
                });

                // Update the countdown every second
                const countdownInterval = setInterval(updateCountdown, 1000);

                // Remove the overlay and clear the interval after 10 seconds
                setTimeout(() => {
                    clearInterval(countdownInterval);
                    removeOverlay();
                }, waitTime * 1000); //convert to ms

                // Initial countdown update
                updateCountdown();

                function updateCountdown() {
                    countdownElement.textContent = countdownValue;
                    countdownValue--;

                    if (countdownValue < 0) {
                        removeOverlay();
                    }
                }

                function removeOverlay() {
                    TcHmi.TopMostLayer.remove(this, cleaningOverlay);
                }


                //<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6v29.1L364.3 320h29.1c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z"/></svg>
            }
            TcHmiProject_CleaningMode.CleaningMode = CleaningMode;
        })(TcHmiProject_CleaningMode = Functions.TcHmiProject_CleaningMode || (Functions.TcHmiProject_CleaningMode = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('CleaningMode', 'TcHmi.Functions.TcHmiProject_CleaningMode', TcHmi.Functions.TcHmiProject_CleaningMode.CleaningMode);
