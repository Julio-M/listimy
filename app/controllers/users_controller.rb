class UsersController < ApplicationController
    before_action :find_user, only: %i[show update destroy]
    before_action :find_freelancer, only: %i[show update destroy]
    skip_before_action :authorize, only: %i[show create update destroy]
    skip_before_action :authorize_freelancer, only: %i[show create index update destroy]
    
    def index
        users = User.all
        render json: users
    end

    def destroy
        if @user
            @user.destroy
            head :no_content
        else
            @freelancer.destroy
            head :no_content
        end
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
            image = params[:image]
            @user.image.attach(image) if image.present?
            @user.update!(user_params)
            @user.update!(profile_picture: @user.image_url)
            render json: @user.as_json(root: false, methods: :image_url), status: :accepted
        else
            image = params[:image]
            @freelancer.image.attach(image) if image.present?
            @freelancer.update!(free_params)
            @freelancer.update!(profile_picture: @freelancer.image_url)
            render json: @freelancer.as_json(root: false, methods: :image_url), status: :accepted
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
        params.permit(:username, :password, :password_confirmation, :email,:profile_picture,:cover_photo, :png, :image_url)
    end

    def free_params
        params.permit(:username, :password, :password_confirmation, :email,:profile_picture,:cover_photo,:services_photos,:location)
    end

end
