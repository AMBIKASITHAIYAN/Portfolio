window.addEventListener("scroll", function() {
            const header = document.querySelector(".header");
            header.classList.toggle("active", window.scrollY > 100);
        });

        // Typing Effect
        const typingText = ["Java Developer", "Front-end Designer", "Creative Coder"];
        let index = 0;
        let charIndex = 0;

        function typeEffect() {
            const typingElement = document.querySelector(".typing");
            typingElement.textContent = typingText[index].substring(0, charIndex);

            if (charIndex < typingText[index].length) {
                charIndex++;
                setTimeout(typeEffect, 150);
            } else {
                setTimeout(() => {
                    charIndex = 0;
                    index = (index + 1) % typingText.length;
                    typeEffect();
                }, 2000);
            }
        }

        typeEffect();