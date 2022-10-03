# Ruby inheritance notes 

class Hulu
    # attr_accessor creates a getter and a setter method for the instance variables it gets passed
    attr_accessor :title, :run_time, :watch
    # setter method:
    def initialize(title, run_time)
      @title = title
      @run_time = run_time
      @watch = false
    end
  
    # getter method:
    def get_show_data
      if @watch
        "You have watched the show #{@title} is #{@run_time} long."
      else
        "You have not watched the show #{@title} is #{@run_time} long."
      end
    end
  end

# Netflix, Spotify, YouTube

class StreamingApp
    attr_accessor :title, :run_time, :played
    def initialize(title_param, run_time_param)
        @title = title_param
        @run_time = run_time_param
        @played = false
    end
    def get_show_data
        if @played
            "You have played #{@title} and is #{@run_time} long."
        else
            "You have NOT played #{@title} and is #{@run_time} long."
        end
    end  
end

class YouTube < StreamingApp
    def initialize(title_param, run_time_param, creator_param)
        super(title_param, run_time_param)
        @creator = creator_param
    end
end

narwhal = YouTube.new("Narwhal Song", "3min", "Jack White")
p narwhal
#<YouTube:0x00000001550c9378 @title="Narwhal Song", @run_time="3min", @played=false, @creator="Jack White">

class Spotify < StreamingApp
    def initialize(title_param, run_time_param, type_of_param, artist_param)
        super(title_param, run_time_param)
        @type_of = type_of_param
        @artist = artist_param
    end
end

rogan = Spotify.new("Joey Diaz", "3hrs", "podcast", "Joe Rogan")
p rogan
#<Spotify:0x00000001420d38b8 @title="Joey Diaz", @run_time="3hrs", @played=false, @type_of="podcast", @artist="Joe Rogan">
