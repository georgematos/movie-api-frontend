const { Builder, By, ExpectedConditions, Key, wait, until } = require('selenium-webdriver')

const driver = new Builder().forBrowser("chrome").build()

describe('run functional tests', () => {

  afterAll(async () => {
    await driver.quit()
  }, 15000)

  test('should search movies for title and show all movies with this title', async () => {
    searchMovieAuxiliarMethod("star wars")
		
    await driver.wait(until.elementLocated(By.className("Card")))

		const movie1 = await driver
				.findElement(By.xpath("//*[@id=\"root\"]/div/div/main/div/div[2]/div/div/div[1]/div/div[1]/div[1]"))
		const movie2 = await driver
				.findElement(By.xpath("//*[@id=\"root\"]/div/div/main/div/div[2]/div/div/div[2]/div/div[1]/div[1]"))
		const movie3 = await driver
				.findElement(By.xpath("//*[@id=\"root\"]/div/div/main/div/div[2]/div/div/div[3]/div/div[1]/div[1]"))

    console.log(await movie1.getText())
    
		expect(await movie1.getText()).toBe("Star Wars: Episode IV - A New Hope")
    expect(await movie2.getText()).toBe("Star Wars: Episode V - The Empire Strikes Back")
		expect(await movie3.getText()).toBe("Star Wars: Episode VI - Return of the Jedi")
  })

  test('shoud click on movie and show details', async () => {
    searchMovieAuxiliarMethod("star wars");

		const expectedElement = await driver.wait(until.elementLocated(By.className("Card")));

		expectedElement.click();

		const movieContent = await driver.wait(until.elementLocated(By.id("movieDetailsContent")));

		const title = await movieContent.findElement(By.id("movieDetailsTitle")).getText();
		const year = await movieContent.findElement(By.id("movieDetailsYear")).getText();
		const genre = await movieContent.findElement(By.id("movieDetailsGenre")).getText();

		expect(title).toBe("Star Wars: Episode IV - A New Hope");
		expect(year).toBe("1977");
		expect(genre).toBe("Genre: Action, Adventure, Fantasy, Sci-Fi");
  })

})

function searchMovieAuxiliarMethod(title) {
  driver.get("http://localhost:3000/")  

  const searchBar = driver.findElement(By.id("homeSearchBar"))
  searchBar.click()
  searchBar.sendKeys(title)

  const searchButton = driver.findElement(By.id("homeSearchButton"))
  searchButton.click()
}