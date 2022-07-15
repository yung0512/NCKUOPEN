# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

AdminUser.create(email: 'jeff8651215@gmail.com', password: '12345678')
Competition.create(name: '2023成大羽球公開賽', start_date: '2023-07-05', end_date: '2023-07-10', status: 'active')