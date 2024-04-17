function filterCarByAvailability(cars) {
  try {
    // Sangat dianjurkan untuk console.log semua hal hehe
    console.log(cars);

    // Tempat penampungan hasil
    const result = [];

    // Tulis code-mu disini
    console.log(cars.length)
    let items = [...cars]

    for (var i = 0; i < items.length; i++) {

      if (items[i].available) {
        result.push(items[i])
      }
    }
    // cars.map((car) => cars.available && result.push(car))
    console.log(result)

    // Rubah code ini dengan array hasil filter berdasarkan availablity
    return result;
  } catch (error) {
    console.log(error.message)
  }
}
