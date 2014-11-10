class UsersController < ApplicationController

  get '/' do
    redirect 'users/profile'
  end

  get '/new' do
    erb :"users/new"
  end

  post '/' do
    user = User.new(params[:user])
    user.password = params[:password]
    user.save!
    redirect "/users/profile"
  end

  get '/profile' do
    current_user.hangmen_won_id ||= 0

    erb :'users/profile'
  end

end
