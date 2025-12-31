function openReport() {
  window.open("Final_report.pdf", "_blank");
}

function openCertificate() {
  window.open("Certificate.pdf", "_blank");
}

function showDay(day) {
  const content = document.getElementById("content");

  const diary = {

day1: `<h2>Day 1</h2><p>Introduction to web development and frontend technologies.</p>`,
day2: `<h2>Day 2</h2><p>HTML basics: structure, tags, headings, paragraphs.</p>`,
day3: `<h2>Day 3</h2><p>HTML lists, tables, images.</p>`,
day4: `<h2>Day 4</h2><p>HTML forms and input elements.</p>`,
day5: `<h2>Day 5</h2><p>CSS introduction: colors, fonts, backgrounds.</p>`,
day6: `<h2>Day 6</h2><p>CSS box model and spacing.</p>`,
day7: `<h2>Day 7</h2><p>CSS flexbox and responsive layouts.</p>`,
day8: `<h2>Day 8</h2><p>Bootstrap grid system.</p>`,
day9: `<h2>Day 9</h2><p>Bootstrap components like cards and navbars.</p>`,
day10: `<h2>Day 10</h2><p>Bootstrap forms and modals.</p>`,
day11: `<h2>Day 11</h2><p>JavaScript basics and variables.</p>`,
day12: `<h2>Day 12</h2><p>JavaScript conditional statements.</p>`,
day13: `<h2>Day 13</h2><p>JavaScript loops.</p>`,
day14: `<h2>Day 14</h2><p>JavaScript functions.</p>`,
day15: `<h2>Day 15</h2><p>DOM manipulation.</p>`,
day16: `<h2>Day 16</h2><p>JavaScript events.</p>`,
day17: `<h2>Day 17</h2><p>Form validation using JavaScript.</p>`,
day18: `<h2>Day 18</h2><p>Mini project planning.</p>`,
day19: `<h2>Day 19</h2><p>Mini project using HTML & CSS.</p>`,
day20: `<h2>Day 20</h2><p>Bootstrap integration in project.</p>`,
day21: `<h2>Day 21</h2><p>JavaScript integration in project.</p>`,
day22: `<h2>Day 22</h2><p>Final review and GitHub deployment.</p>`
  };

  content.innerHTML = diary[day];
}
