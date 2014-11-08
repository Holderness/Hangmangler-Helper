class WelcomeController < ApplicationController

	get '/' do 
		erb :index
	end

	get '/console' do
	  binding.pry
  end

end