module Sinatra
	module HangmanglerHelper

		def update_game_state(guess, word, game_state)
			game_state ||= ""
			game_state = word.chars.map! do |char|
				if (char == " " || char == "'" || char == "-")
					char
				elsif char.upcase == guess.upcase
					char
				elsif game_state.include?(char)
					char
				else
					"_"
				end
			end
			game_state.join()
		end

		def update_incorrect_guesses(incorrect_guesses, guess, word)
			incorrect_guesses ||= ""
			incorrect_guesses += guess unless word.downcase.include?(guess.downcase)
			incorrect_guesses
		end

		def create_game_state(word)
			game_state = word.chars.map! do |char|
				if (char == " " || char == "'" || char == "-")
					char
				else
					"_"
				end
			end
			game_state.join()
		end

	end
end