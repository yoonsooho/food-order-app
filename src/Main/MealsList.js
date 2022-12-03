import axios from "axios"
import React, { useEffect, useState } from "react"
import MealsListStyle from "./MealsListStyle"
import MealsItemForm from "./MealsItemForm"

const MealsList = () => {
  let [foodList, setFoodList] = useState([])
  let [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      try {
        let response = await axios.get(
          "https://react-http-b976c-default-rtdb.firebaseio.com/meals.json"
        )
        if (!response.status === 200) {
          throw new Error("Wrong")
        }
        if (response.status === 200) {
          let data = await response.data
          let loadedData = []
          for (let i in data) {
            loadedData.push({
              id: i,
              description: data[i].description,
              name: data[i].name,
              price: data[i].price,
            })
          }

          setFoodList(loadedData)
        }
      } catch (err) {
        console.log("주소를 확인해보세요")
      }
    }
    fetchData()
    setLoading(false)
  }, [])
  console.log(foodList)
  return (
    <MealsListStyle>
      {loading && (
        <section>
          <div>로딩중</div>
        </section>
      )}
      {!loading && (
        <nav>
          {foodList.map((i) => {
            return (
              <div className="mealsItem">
                <ul key={i.id}>
                  <li>{i.name}</li>
                  <li>{i.description}</li>
                  <li>{i.price}</li>
                </ul>
                <MealsItemForm />
              </div>
            )
          })}
        </nav>
      )}
    </MealsListStyle>
  )
}

export default MealsList
