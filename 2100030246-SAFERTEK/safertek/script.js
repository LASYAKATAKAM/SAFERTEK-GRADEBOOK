// Sample data
const students = [
    {
      "id": 1,
      "name": "John Doe",
      "ticketNumber": "T123",
      "ticketTopic": "Mathematics",
      "examGrade": 8,
      "ratingGrade": 7,
      "comments": ""
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "ticketNumber": "T456",
      "ticketTopic": "Physics",
      "examGrade": 6,
      "ratingGrade": 9,
      "comments": ""
    },
    {
      "id": 3,
      "name": "Alice Johnson",
      "ticketNumber": "T789",
      "ticketTopic": "Chemistry",
      "examGrade": 7,
      "ratingGrade": 8,
      "comments": ""
    },
    {
      "id": 4,
      "name": "Bob Brown",
      "ticketNumber": "T987",
      "ticketTopic": "Biology",
      "examGrade": 5,
      "ratingGrade": 6,
      "comments": ""
    },
    {
      "id": 5,
      "name": "Eva White",
      "ticketNumber": "T654",
      "ticketTopic": "History",
      "examGrade": 9,
      "ratingGrade": 7,
      "comments": ""
    },
    {
      "id": 6,
      "name": "Michael Johnson",
      "ticketNumber": "T321",
      "ticketTopic": "Geography",
      "examGrade": 3,
      "ratingGrade": 2,
      "comments": ""
    },
    {
      "id": 7,
      "name": "Emily Davis",
      "ticketNumber": "T852",
      "ticketTopic": "Literature",
      "examGrade": 2,
      "ratingGrade": 4,
      "comments": ""
    },
    {
      "id": 8,
      "name": "William Wilson",
      "ticketNumber": "T147",
      "ticketTopic": "Computer Science",
      "examGrade": 8,
      "ratingGrade": 8,
      "comments": ""
    },
    {
      "id": 9,
      "name": "Olivia Miller",
      "ticketNumber": "T258",
      "ticketTopic": "Art",
      "examGrade": 7,
      "ratingGrade": 7,
      "comments": ""
    },
    {
      "id": 10,
      "name": "James Taylor",
      "ticketNumber": "T369",
      "ticketTopic": "Music",
      "examGrade": 6,
      "ratingGrade": 6,
      "comments": ""
    },
    {
      "id": 11,
      "name": "Sophia Lee",
      "ticketNumber": "T753",
      "ticketTopic": "Physical Education",
      "examGrade": 9,
      "ratingGrade": 9,
      "comments": ""
    },
    {
      "id": 12,
      "name": "Liam Clark",
      "ticketNumber": "T951",
      "ticketTopic": "Economics",
      "examGrade": 5,
      "ratingGrade": 5,
      "comments": ""
    },
    {
      "id": 13,
      "name": "Ava Hall",
      "ticketNumber": "T246",
      "ticketTopic": "Psychology",
      "examGrade": 8,
      "ratingGrade": 8,
      "comments": ""
    },
    {
      "id": 14,
      "name": "Logan King",
      "ticketNumber": "T579",
      "ticketTopic": "Sociology",
      "examGrade": 7,
      "ratingGrade": 7,
      "comments": ""
    },
    {
      "id": 15,
      "name": "Mia Evans",
      "ticketNumber": "T804",
      "ticketTopic": "Anthropology",
      "examGrade": 6,
      "ratingGrade": 6,
      "comments": ""
    }
  ];
  
// Function to populate table with student data
function populateTable() {
    const tbody = document.querySelector('#gradebook tbody');
    tbody.innerHTML = '';
  
    students.forEach((student, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.ticketNumber}</td>
        <td>${student.ratingGrade}</td>
        <td>${student.examGrade}</td>
        <td>${calculateFinalGrade(student)}</td>
        <td>${calculateStatus(student)}</td>
        <td><button class="detailsBtn" data-index="${index}">Details</button></td>
      `;
      tbody.appendChild(tr);
    });
}

function populateTable() {
    const tbody = document.querySelector('#gradebook tbody');
    tbody.innerHTML = '';
  
    students.forEach((student, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.ticketNumber}</td>
        <td>${student.ratingGrade}</td>
        <td>${student.examGrade}</td>
        <td>${calculateFinalGrade(student)}</td>
        <td>${calculateStatus(student)}</td>
        <td><button class="detailsBtn" data-index="${index}">Details</button></td>
      `;
      tbody.appendChild(tr);
    });
}

function calculateFinalGrade(student) {
    return 0.6 * student.examGrade + 0.4 * student.ratingGrade;
}

function calculateStatus(student) {
    return calculateFinalGrade(student) > 4 ? 'Passed' : 'Failed';
}

function filterStudents(option, query) {
    let filteredStudents;
    switch (option) {
      case 'all':
        filteredStudents = students;
        break;
      case 'name':
        filteredStudents = students.filter(student => student.name.toLowerCase().includes(query.toLowerCase()));
        break;
      case 'ticket':
        filteredStudents = students.filter(student => student.ticketNumber.toLowerCase().includes(query.toLowerCase()));
        break;
      case 'passed':
        filteredStudents = students.filter(student => calculateStatus(student) === 'Passed');
        break;
      case 'failed':
        filteredStudents = students.filter(student => calculateStatus(student) === 'Failed');
        break;
      default:
        filteredStudents = students;
    }
    return filteredStudents;
}

function updateTable(option, query) {
  const filteredStudents = filterStudents(option, query);
  const tbody = document.querySelector('#gradebook tbody');
  tbody.innerHTML = '';

  filteredStudents.forEach((student, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.ticketNumber}</td>
      <td>${student.ratingGrade}</td>
      <td>${student.examGrade}</td>
      <td>${calculateFinalGrade(student)}</td>
      <td>${calculateStatus(student)}</td>
      <td><button class="detailsBtn" data-index="${index}">Details</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function calculateStatistics() {
    const totalStudents = students.length;
    const passedStudents = students.filter(student => calculateStatus(student) === 'Passed').length;
    const failedStudents = totalStudents - passedStudents;
    const grades = students.map(student => calculateFinalGrade(student));
    const averageGrade = totalStudents > 0 ? grades.reduce((a, b) => a + b, 0) / totalStudents : 0;
    const maxGrade = totalStudents > 0 ? Math.max(...grades) : 0;
    const minGrade = totalStudents > 0 ? Math.min(...grades) : 0;

    return { totalStudents, passedStudents, failedStudents, averageGrade, maxGrade, minGrade };
}

function updateStatistics() {
    const { totalStudents, passedStudents, failedStudents, averageGrade, maxGrade, minGrade } = calculateStatistics();
    document.getElementById('totalStudents').textContent = totalStudents;
    document.getElementById('passedStudents').textContent = passedStudents;
    document.getElementById('failedStudents').textContent = failedStudents;
    document.getElementById('averageGrade').textContent = averageGrade.toFixed(2);
    document.getElementById('maxGrade').textContent = maxGrade;
    document.getElementById('minGrade').textContent = minGrade;
}

document.getElementById('filterOption').addEventListener('change', function(event) {
  const option = event.target.value;
  const query = document.getElementById('filterInput').value;
  updateTable(option, query);
});

document.getElementById('filterInput').addEventListener('input', function(event) {
  const option = document.getElementById('filterOption').value;
  const query = event.target.value;
  updateTable(option, query);
});

document.getElementById('showStatisticsBtn').addEventListener('click', function() {
  const statisticsBlock = document.getElementById('statisticsBlock');
  if (statisticsBlock.classList.contains('hidden')) {
    updateStatistics();
    statisticsBlock.classList.remove('hidden');
    document.getElementById('showStatisticsBtn').textContent = 'Hide Statistics';
  } else {
    statisticsBlock.classList.add('hidden');
    document.getElementById('showStatisticsBtn').textContent = 'Show Statistics';
  }
});

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('detailsBtn')) {
    const index = event.target.getAttribute('data-index');
    const student = students[index];
    displayDetailsModal(student);
  }
});

function displayDetailsModal(student) {
  const modal = document.getElementById('detailsModal');
  modal.innerHTML = `
    <h2>Details</h2>
    <button id="closeDetailsBtn">&times;</button>
    <p>Name: ${student.name}</p>
    <p>Ticket Number: ${student.ticketNumber}</p>
    <p>Rating Grade: ${student.ratingGrade}</p>
    <p>Exam Grade: ${student.examGrade}</p>
  `;
  modal.classList.remove('hidden');

  document.getElementById('closeDetailsBtn').addEventListener('click', closeDetailsModal);
}

function closeDetailsModal() {
  const modal = document.getElementById('detailsModal');
  modal.classList.add('hidden');
}

populateTable();