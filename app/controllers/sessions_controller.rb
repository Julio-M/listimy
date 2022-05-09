class SessionsController < ApplicationController
  skip_before_action :authorize, only: %i[create create_freelancer destroy_freelancer]

  #users start
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end
  #users end


  #freelancers start

  def create_freelancer
    freelancer = Freelancer.find_by(username: params[:username])
    if freelancer&.authenticate(params[:password])
      session[:freelancer_id] = freelancer.id
      render json: freelancer
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  def destroy_freelancer
    session.delete :freelancer_id
    head :no_content
  end

  #freelancerts end

end
