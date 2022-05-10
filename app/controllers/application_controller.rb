class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound,with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid,with: :render_invalid

  before_action :authorize, :authorize_freelancer

  private

  def authorize
    @current_user = User.find_by(id: session[:user_id])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def authorize_freelancer
    @current_freelancer = Freelancer.find_by(id: session[:user_id])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_freelancer
  end

  def render_not_found
   render json:{
    error: "#{controller_name.classify} not found"
    },
    status: :not_found
   end

  def  render_invalid(error_obj)
   render json:{
    errors: error_obj.record.errors.full_messages
    },
    status: :unprocessable_entity
   end



end
