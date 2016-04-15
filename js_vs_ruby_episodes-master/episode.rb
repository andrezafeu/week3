class Episode
	def initialize(title, episode_number, description, rating)
		@title = title
		@episode_number = episode_number
		@description = description
		@rating = rating
	end

	def print
		puts "#{@episode_number}: #{@title}"
		puts "#{@description}"
		puts "#{@rating}"
	end
end

class EpisodeList
	def initialize(episodes)
		@episodes = episodes
	end

	def print_episodes
		@episodes.each do | episode | 
			episode.print
		end
	end
end

episode1 = Episode.new("Winter is coming", 1, "It's winter dude...", 8.9)
episode2 = Episode.new("Winter has been here", 2, "Winter came", 8.5)

my_list = EpisodeList.new([episode1, episode2])
my_list.print_episodes