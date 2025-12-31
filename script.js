function showContent(day) {
  const box = document.getElementById("content");

  const data = {
    final: `
      <h2>Final Report</h2>
      <p>This 1-month web development training enhanced my frontend skills using HTML, CSS, JavaScript, and GitHub.</p>
    `,
    certificate: `
      <h2>Certificate</h2>
      <p>Training completion certificate uploaded here.</p>
    `,

    day1: `
      <h2>Day 1</h2>
      <p><b>Topic:</b> Introduction to Web Development</p>
      <p><b>Work:</b> Setup VS Code, browser tools</p>
    `,
    day2: `
      <h2>Day 2</h2>
      <p><b>Topic:</b> HTML Basics</p>
      <p><b>Work:</b> Created basic webpage</p>
    `,
    day3: `
      <h2>Day 3</h2>
      <p><b>Topic:</b> Forms & Tables</p>
      <p><b>Work:</b> Registration form</p>
    `,
    day4: `
      <h2>Day 4</h2>
      <p><b>Topic:</b> CSS Introduction</p>
      <p><b>Work:</b> Styling webpages</p>
    `,
    day5: `
      <h2>Day 5</h2>
      <p><b>Topic:</b> CSS Box Model</p>
      <p><b>Work:</b> Layout design</p>
    `,
    day6: `
      <h2>Day 6</h2>
      <p><b>Status:</b> OFF (Saturday)</p>
    `,
    day7: `
      <h2>Day 7</h2>
      <p><b>Status:</b> OFF (Sunday)</p>
    `,
    day8: `
      <h2>Day 8</h2>
      <p><b>Topic:</b> JavaScript Basics</p>
    `,
    day9: `
      <h2>Day 9</h2>
      <p><b>Topic:</b> Conditions & Loops</p>
    `,
    day10: `
      <h2>Day 10</h2>
      <p><b>Topic:</b> DOM Manipulation</p>
    `,
    day11: `<h2>Day 11</h2><p>Git Basics</p>`,
    day12: `<h2>Day 12</h2><p>GitHub Repositories</p>`,
    day13: `<h2>Day 13</h2><p>Branching & Merging</p>`,
    day14: `<h2>Day 14</h2><p>Debugging</p>`,
    day15: `<h2>Day 15</h2><p>Mini Project Planning</p>`,
    day16: `<h2>Day 16</h2><p>Project HTML</p>`,
    day17: `<h2>Day 17</h2><p>Project CSS</p>`,
    day18: `<h2>Day 18</h2><p>Project JavaScript</p>`,
    day19: `<h2>Day 19</h2><p>Testing</p>`,
    day20: `<h2>Day 20</h2><p>Project Submission</p>`,
    day21: `<h2>Day 21</h2><p>OFF (Saturday)</p>`,
    day22: `<h2>Day 22</h2><p>OFF (Sunday)</p>`,
    day23: `<h2>Day 23</h2><p>Optimization</p>`,
    day24: `<h2>Day 24</h2><p>Enhancements</p>`,
    day25: `<h2>Day 25</h2><p>Deployment</p>`,
    day26: `<h2>Day 26</h2><p>Review</p>`,
    day27: `<h2>Day 27</h2><p>Documentation</p>`,
    day28: `<h2>Day 28</h2><p>OFF (Saturday)</p>`,
    day29: `<h2>Day 29</h2><p>OFF (Sunday)</p>`,
    day30: `<h2>Day 30</h2><p>Final Evaluation</p>`
  };

  box.innerHTML = data[day];
}
