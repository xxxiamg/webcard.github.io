document.getElementById('text').addEventListener('click', function () {
    const letters = document.querySelectorAll('.text div');
    letters.forEach(letter => {
        const text = letter.innerText;
        letter.innerText = ''; // Очищаем текст
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.innerText = char;
            span.style.display = 'inline-block';
            span.style.transition = 'transform 0.5s ease';
            span.style.transformOrigin = 'center'; // Вращение по горизонтали
            letter.appendChild(span);

            // Анимация вращения
            setTimeout(() => {
                span.style.transform = 'rotateY(360deg)'; // Вращение по горизонтали
            }, index * 100); // Задержка для каждого символа
        });

        // Возврат в исходное положение
        setTimeout(() => {
            letter.innerText = text;
        }, text.length * 100 + 500); // Время для завершения анимации
    });
});