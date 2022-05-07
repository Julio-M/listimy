# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "wliu", profile_picture: "https://ca.slack-edge.com/T02MD9XTF-U02SHR9GT6U-6aabe560127a-512", cover_photo: "https://ca.slack-edge.com/T02MD9XTF-U02SHR9GT6U-6aabe560127a-512")
user2 = User.create(username: "xmihali", profile_picture: "https://ca.slack-edge.com/T02MD9XTF-U02RSFAPFJ5-be6dd84eecd9-512", cover_photo: "https://ca.slack-edge.com/T02MD9XTF-U02RSFAPFJ5-be6dd84eecd9-512")

freelancer1 = Freelancer.create(username: "workerOne", profile_picture: "https://assets.pokemon.com/assets/cms2/img/misc/countries/au/country_detail_pokemon.png", cover_photo: "https://assets.pokemon.com/assets/cms2/img/misc/countries/au/country_detail_pokemon.png", services_photos: "https://asset.vg247.com/pikachu-2.png/BROK/thumbnail/1600x900/quality/100/pikachu-2.png", location: "11 Broadway, New York, NY, 10004")
freelancer2 = Freelancer.create(username: "workerTwo", profile_picture: "https://legends.pokemon.com/assets/pokemon/pokemon_rowlet.png", cover_photo: "https://legends.pokemon.com/assets/pokemon/pokemon_rowlet.png", services_photos: "https://static2.gamerantimages.com/wordpress/wp-content/uploads/2020/10/Totodile-Water-Gun.jpg", location: "11 Wall Street, New York, NY, 10005")
freelancer3 = Freelancer.create(username: "workerThree", profile_picture: "https://www.pokemoncenter.com/products/images/P8041/710-29297/P8041_710-29297_01_full.jpg", cover_photo: "https://www.pokemoncenter.com/products/images/P8041/710-29297/P8041_710-29297_01_full.jpg", services_photos: "https://media.comicbook.com/2017/06/bulbasaur-attack-1003665.jpg", location: "144 Fulton St, New York, NY, 10038")

booking1 = Booking.create(user_id: user1.id, freelancer_id: freelancer1.id, booking_date: "5/7/2022")
booking2 = Booking.create(user_id: user1.id, freelancer_id: freelancer2.id, booking_date: "5/10/2022")
booking3 = Booking.create(user_id: user2.id, freelancer_id: freelancer3.id, booking_date: "5/20/2022")


category1 = Category.create(category_name: "Driving", category_picture: "https://www.morgan-motor.com/wp-content/uploads/2022/02/super-3-model-1.jpg")
category2 = Category.create(category_name: "Music", category_picture: "https://media.istockphoto.com/vectors/music-note-icon-vector-illustration-vector-id1175435360?k=20&m=1175435360&s=612x612&w=0&h=1yoTgUwobvdFlNxUQtB7_NnWOUD83XOMZHvxUzkOJJs=")
category3 = Category.create(category_name: "Sports", category_picture: "https://www.liberty.edu/champion/wp-content/uploads/2020/03/SPORTS.jpg")

service1 = Service.create(service_name: "Monthly taxi driver", freelancer_id: freelancer1.id, service_price: 30, category_id: category1.id)
service2 = Service.create(service_name: "Personal singer", freelancer_id: freelancer2.id, service_price: 40, category_id: category2.id)
service3 = Service.create(service_name: "Tennis lessons", freelancer_id: freelancer3.id, service_price: 100, category_id: category3.id)

review1 = Review.create(freelancer_id: freelancer1.id, user_id: user1.id, stars: 5, comment: "Was nice")
review2 = Review.create(freelancer_id: freelancer3.id, user_id: user2.id, stars: 3, comment: "Was okay")
