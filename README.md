# Models

This is a utility library that acts as a layer to get the entities from the database and handle the connection.

Should you need to access any of these services, this is the preferred way of connecting to them in Node.JS environments.
## Usage:

```typescript
import { connectToDB, getEntities } from "models";

//connect to de database
 await connectToDB( {
        host: "test",
        port: 5432,
        username: "test",
        password: "test",
        database: "test",
        type: "postgres"
    })
// Access to the data
// Get the repo
const { Recipe } = getEntities()
const recipes   await Recipe.find(
              {
                  relations: ["recipeItems", "recipeItems.ingredient"],
                  select: {
                      id: true,
                      name: true,
                      recipeItems: {
                          quantity: true,
                          ingredient: {
                              id: true,
                              name: true
                          }
                      }
                  }
              }
          )

```