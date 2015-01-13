class UsersController < ApplicationController

  get '/' do
    redirect 'users/profile'
  end

  get '/new' do
    erb :"users/new"
  end

  post '/' do
    if User.find_by({username: params['user']['username']})
      @error = "Password already taken."
      erb :"users/new"
    elsif params['user']['username'] == nil || params['user']['username'].length < 4
      @error = "Username must be at least 5 characters."
      erb :"users/new"
    elsif params['password'] == nil || params['password'].length < 4 
      @error = "Password must be at least 5 characters."
      erb :"users/new"
    else
      user = User.new(params[:user])
      user.password = params[:password]
      user.hangmen_won_id ||= 0
      user.save!
      redirect 'sessions/login'
    end
  end

  get '/profile' do
    authenticate!
    current_user.hangmen_won_id ||= 0
    erb :'users/profile'
  end

end
