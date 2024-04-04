function sortYearDescendingly(cars) {
  for (let i = 0; i < cars.length - 1; i++) {
    for (let j = 0; j < cars.length - 1 - i; j++) {
      if (cars[j].year < cars[j + 1].year) {
        // sort descendingly
        // Tukar posisi jika tahun mobil ke-i lebih besar dari tahun mobil ke-(i+1)
        const temp = cars[j];
        cars[j] = cars[j + 1];
        cars[j + 1] = temp;
      }
    }
  }
}

function sortCarByYearDescendingly(cars) {
  try {
    // Sangat dianjurkan untuk console.log semua hal hehe
    console.log("Sebelum dilakukan sorting descendingly")
    console.log(cars);

    // Clone array untuk menghindari side-effect
    // Apa itu side effect?
    const result = [...cars];

    // Tulis code-mu disini
    sortYearDescendingly(result)
    console.log("Setelah dilakukan sorting descendingly")
    console.log(result)

    // Rubah code ini dengan array hasil sorting secara descending
    return result;

  } catch (error) {
    console.log(error.message)
  }

}
