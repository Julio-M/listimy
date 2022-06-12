# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# user1 = User.create(username: "wliu", email:"wliu@listimy.com", password_digest:"jelly123")
# user2 = User.create(username: "xmihali",email:"xmihali@listimy.com", password_digest:"macandcheese123")

# freelancer1 = Freelancer.create(username: "workerOne", email:"all@listimy.com", password_digest:"jelly31123",services_photos: "https://asset.vg247.com/pikachu-2.png/BROK/thumbnail/1600x900/quality/100/pikachu-2.png", location: "11 Broadway, New York, NY, 10004")
# freelancer2 = Freelancer.create(username: "workerTwo",email:"none@listimy.com", password_digest:"jelly123213", services_photos: "https://static2.gamerantimages.com/wordpress/wp-content/uploads/2020/10/Totodile-Water-Gun.jpg", location: "11 Wall Street, New York, NY, 10005")
# freelancer3 = Freelancer.create(username: "workerThree", email:"what@listimy.com", password_digest:"jelly13243223", services_photos: "https://media.comicbook.com/2017/06/bulbasaur-attack-1003665.jpg", location: "144 Fulton St, New York, NY, 10038")

# booking1 = Booking.create(user_id: user1.id, freelancer_id: freelancer1.id, booking_date: "5/7/2022")
# booking2 = Booking.create(user_id: user1.id, freelancer_id: freelancer2.id, booking_date: "5/10/2022")
# booking3 = Booking.create(user_id: user2.id, freelancer_id: freelancer3.id, booking_date: "5/20/2022")


# category1 = Category.create(category_name: "Hair Styling", category_picture: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFpciUyMHN0eWxpc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
# category2 = Category.create(category_name: "Barber", category_picture: "https://images.unsplash.com/photo-1596362601603-b74f6ef166e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhcmJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")
# category3 = Category.create(category_name: "Tattoo", category_picture: "https://images.unsplash.com/photo-1543132384-23765008467c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRhdHRvbyUyMG1hY2hpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
# category4 = Category.create(category_name: "Massage", category_picture: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3BhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")
# category5 = Category.create(category_name: "Beautician", category_picture: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFrZSUyMHVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")
# category6 = Category.create(category_name: "Photographer", category_picture: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")
# category7 = Category.create(category_name: "Modeling", category_picture: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9zaG9vdCUyMHN0dWRpb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")
# category8 = Category.create(category_name: "Personal Trainer", category_picture: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltJTIwZXF1aXBtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")
# category9 = Category.create(category_name: "Cleaner", category_picture: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYW5pbmclMjBlcXVpcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")

# service1 = Service.create(service_name: "Hairdresser", freelancer_id: freelancer1.id, service_price: 30, category_id: category1.id)
# service2 = Service.create(service_name: "Barber", freelancer_id: freelancer2.id, service_price: 40, category_id: category2.id)
# service3 = Service.create(service_name: "Tattoo", freelancer_id: freelancer3.id, service_price: 100, category_id: category3.id)
# service4 = Service.create(service_name: "Masseuse", freelancer_id: freelancer1.id, service_price: 100, category_id: category4.id)
# service5 = Service.create(service_name: "Make up artist", freelancer_id: freelancer2.id, service_price: 100, category_id: category5.id)
# service6 = Service.create(service_name: "Photographer", freelancer_id: freelancer3.id, service_price: 100, category_id: category6.id)
# service7 = Service.create(service_name: "Model", freelancer_id: freelancer1.id, service_price: 100, category_id: category7.id)
# service8 = Service.create(service_name: "Trainer", freelancer_id: freelancer2.id, service_price: 100, category_id: category8.id)
# service9 = Service.create(service_name: "Cleaner", freelancer_id: freelancer2.id, service_price: 100, category_id: category9.id)

# review1 = Review.create(freelancer_id: freelancer1.id, user_id: user1.id, stars: 5, comment: "Was nice")
# review2 = Review.create(freelancer_id: freelancer3.id, user_id: user2.id, stars: 3, comment: "Was okay")


