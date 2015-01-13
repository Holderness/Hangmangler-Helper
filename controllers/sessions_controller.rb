class SessionsController < ApplicationController

  get '/login' do
    erb :'sessions/login'
  end

  post '/' do
    user = User.find_by({username: params[:username]})
    if user == nil
      @error = "Be sure to enter your correct username and password."
      erb :'sessions/login'
    elsif user.password == params[:password]
      session[:current_user] = user.id
      redirect '/users/profile'
    elsif user.password != params[:password]
      @error = "Incorrect password."
      erb :'sessions/login'
    else
      @error = "Be sure to enter your correct username and password."
      erb :'sessions/login'
    end
  end

  delete '/' do
    session[:current_user] = nil
    redirect '/'
  end

end