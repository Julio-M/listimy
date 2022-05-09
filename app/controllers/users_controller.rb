class UsersController < ApplicationController
    before_action :find_user, only: %i[show]
    skip_before_action :authorize, only: :create
    
    def index
        users = User.all
        render json: users
    end

    def show
        render json: @user
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
      end

    private
    # goes under private
    #to be used with show, update and destroy
    def find_user
        @user = User.find_by(id:session[:user_id])
    end

    def user_params
        params.permit(:username, :password, :password_confirmation, :email,:profile_picture,:cover_photo)
    end

end
