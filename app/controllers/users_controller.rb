class UsersController < ApplicationController
    before_action :find_user, only: %i[show update]
    before_action :find_freelancer, only: %i[show update]
    skip_before_action :authorize, only: %i[show create update]
    skip_before_action :authorize_freelancer, only: %i[show create index]
    
    def index
        users = User.all
        render json: users
    end

    def show
        if @user
            render json: @user
        else
            render json:@freelancer
        end
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update
        if @user
            @user.update(user_params)
            render json: @user, status: :accepted
        else
            @freelancer.update(free_params)
            render json: @freelancer, status: :accepted
        end
    end

    private
    # goes under private
    #to be used with show, update and destroy
    def find_user
        @user = User.find_by(id:session[:user_id])
    end

    def find_freelancer
        @freelancer = Freelancer.find_by(id:session[:freelancer_id])
    end

    def user_params
        params.permit(:username, :password, :password_confirmation, :email,:profile_picture,:cover_photo)
    end

    def free_params
        params.permit(:username, :password, :password_confirmation, :email,:profile_picture,:cover_photo,:services_photos,:location)
    end

end
