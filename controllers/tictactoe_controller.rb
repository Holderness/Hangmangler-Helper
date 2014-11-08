class TicTacToeController < ApplicationController

	get '/game' do
		erb :'tictactoe/index'
	end



end