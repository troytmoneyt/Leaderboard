import { data, display } from './data.js';
import './style.css';
import { sendNewScore } from './apiData.js';
import render from './receiveDOM.js';

display(data);

const refreshBtn = document.querySelector('.btn-refresh');
const form = document.querySelector('.add-form');

document.addEventListener('DOMContentLoaded', () => {
  refreshBtn.addEventListener('click', async () => {
    render();
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.querySelector('.name-inputs');
    const score = document.querySelector('.score-inputs');
    sendNewScore();
    name.value = '';
    score.value = '';
  });

  render();
});
