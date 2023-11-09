import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`
);

gallery.insertAdjacentHTML('beforeend', markup.join(''));

const modalImageEl = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  navText: ['←', '→'],
});

//Варіант 2:
// const modalImageEl = $'.gallery a'.simpleLightbox({
//   captionsData: 'alt',
//   captionDelay: 250,
//   navText: ['←', '→'],
// });

// Додай бібліотеку SimpleLightbox як залежність проекту, використовуючи npm
// (посилання на CDN з твоєї минулої роботи більше не потрібне).
// Використовуй свій JavaScript код з попередньої домашньої роботи,
//  але виконай рефакторинг з урахуванням того, що бібліотека була встановлена через npm
// (синтаксис import /export).
// Для того щоб підключити CSS код бібліотеки в проект, необхідно додати ще один імпорт, крім того,
// що описаний в документації.

// // Описаний в документації
// import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";
