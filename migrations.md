### ACTIVE RECORD MIGRATIONS LECTURE NOTES

# allow us to change the shape of an existing database
 - add columns
 - delete columns
 - change the name of a column
 - change the data type of a column

# RAILS SET UP COMMANDS
$ rails new songapp -d postgresql -T
$ rails db:create

$ rails g model Song song_name:string artist_name:string
  invoke  active_record
      create    db/migrate/20221006175425_create_songs.rb
      create    app/models/song.rb


$ rails db:migrate
➜  songapp git:(main) ✗ rails db:migrate
== 20221006175425 CreateSongs: migrating ======================================
-- create_table(:songs)
   -> 0.0125s
== 20221006175425 CreateSongs: migrated (0.0125s) =======

## Add column

➜  songapp git:(main) ✗ rails g migration add_rating_to_songs
      invoke  active_record
      create    db/migrate/20221006180741_add_rating_to_songs.rb
➜  songapp git:(main) ✗ rails db:migrate
== 20221006180741 AddRatingToSongs: migrating =================================
-- add_column(:songs, :rating, :integer)
   -> 0.0062s
== 20221006180741 AddRatingToSongs: migrated (0.0063s) ======


# Remove Column
  songapp git:(main) ✗ rails g migration remove_artist_from_songs
      invoke  active_record
      create    db/migrate/20221006181224_remove_artist_from_songs.rb
➜  songapp git:(main) ✗ rails db:migrate                          
== 20221006181224 RemoveArtistFromSongs: migrating ============================
-- remove_column(:songs, :artist_name)
   -> 0.0075s
== 20221006181224 RemoveArtistFromSongs: migrated (0.0075s) ===================

# Rename Column

➜  songapp git:(main) ✗ rails g migration ChangeNameOfColumnRatingToStars 
      invoke  active_record
      create    db/migrate/20221006181831_change_name_of_column_rating_to_stars

➜  songapp git:(main) ✗ rails db:migrate
== 20221006181831 ChangeNameOfColumnRatingToStars: migrating ==================
-- rename_column(:songs, :rating, :stars)
   -> 0.0038s
== 20221006181831 ChangeNameOfColumnRatingToStars: migrated (0.0038s) =========

# Change data type of column 
➜  songapp git:(main) ✗ rails g migration change_data_type_of_stars
      invoke  active_record
      create    db/migrate/20221006185145_change_data_type_of_stars.rb

== 20221006185145 ChangeDataTypeOfStars: migrating ============================
-- change_column(:songs, :stars, :string)
   -> 0.0129s
== 20221006185145 ChangeDataTypeOfStars: migrated (0.0129s) ===================