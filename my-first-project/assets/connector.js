
  let paths = document.getElementById("paths");
  let connections2 = [];
console.log(5);
console.log("Hello world");
  function getElement(element) {
    for (let a = 0; a < element.length; a++) {
      if (element[a].className.indexOf("indicator") != -1) {
        return element[a];
      }
    }

    return null;
  }

  function connectElements(connections) {
    let spans = document.getElementsByTagName("span");
    let start;
    let end;
    let temp;
    for (let a = 0; a < connections.length; a += 2) {
      for (let b = 0; b < spans.length; b++) {
        if (spans[b].innerText == connections[a]) {
          start = getElement(spans[b].parentElement.children);
        }
        if (spans[b].innerText == connections[a + 1]) {
          if (connections[a + 1] == "Amendra Bahubali") {
            end = spans[b];
          } else {
            end = getElement(spans[b].parentElement.children);
          }
        }
      }
      connections2.push({
        start: start,
        end: end
      });
    }
    coordinates();
  }

  function coordinates() {
    let padding = 5;
    let bezierWeight = 0.5;
    let oldPaths = paths.children;
    for (let a = oldPaths.length - 1; a >= 0; a--) {
      paths.removeChild(oldPaths[a]);
    }

    let x1, y1, x4, y4, dx, x2, x3, path, start, end;

    for (let a = 0; a < connections2.length; a++) {
      start = $(connections2[a].start);
      end = $(connections2[a].end);

      x1 = start.offset().left + start.width() / 2 - padding;
      y1 = start.offset().top + start.height() / 2 - padding;
      x4 = end.offset().left + start.width() / 2 - padding;
      y4 = end.offset().top + start.height() / 2 - padding;
      dx = Math.abs(x4 - x1) * bezierWeight;

      if (x4 < x1) {
        x2 = x1 - dx;
        x3 = x4 + dx;
      } else {
        x2 = x1 + dx;
        x3 = x4 - dx;
      }

      data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;

      path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", data);
      path.setAttribute("class", "path");
      paths.appendChild(path);
    }
  }

  connectElements([
    "Amendra Bahubali", "Command Sequence Starting",
    "Amendra Bahubali", "Devsena",
    "Amendra Bahubali", "Kattapa",
    "Amendra Bahubali", "Bhalaldeva",
    "Amendra Bahubali", "Mahendra Bahubali",
    "Amendra Bahubali", "Shivgami"
  ]);

